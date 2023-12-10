import { Component } from '@angular/core';
import { ThoughtInterface } from '../ITthought';
import { ThoughtService } from '../thought.service';
import { RouteReuseStrategy, Router } from '@angular/router';

@Component({
  selector: 'app-list-toughts',
  templateUrl: './list-toughts.component.html',
  styleUrls: ['./list-toughts.component.css']
})
export class ListToughtsComponent {
  /*
  listThought: ThoughtInterface[] = [
    {
      id: 1,
      conteudo: "Passo informações para o componente filho",
      autoria: "Componente pai",
      modelo: "modelo3"
    },
  ]*/
  listThought: ThoughtInterface[] = []
  currentPage: number = 1;
  carregarMaisPensamentosList: boolean = true;
  filterSearch: string = '';
  favorite: boolean = false;
  listFavoriteToChildComponent: ThoughtInterface[] = [];

  constructor(
    private service: ThoughtService,
    private router: Router
    ) { }

  //ngOnInit executa o algoritmo assim que o component é iniciado
  ngOnInit(): void {
    // this.service.listIt(this.currentPage, this.filterSearch).subscribe((listaDePensamento) => {
    //   this.listThought = listaDePensamento
    // })

    this.listAllThoughts()
  }

  reloadList() {
    this.favorite = false;
    this.currentPage = 1;
    // this.router.routeReuseStrategy.shouldReuseRoute = () = false;
    // this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  listAllThoughts() {
    //Recarrega a página, porém faz reload em tudo
    // location.reload();
    this.service.listIt(this.currentPage, this.filterSearch, this.favorite = false).subscribe((listaDePensamento) => {
      this.listThought = listaDePensamento
    })
  }

  loadMoreThoughts() {
    //++ = incrementando o número de páginas para carregar os outros pensamentoss
    this.service.listIt(++this.currentPage, this.filterSearch, this.favorite)
      .subscribe(listLoadedFromAPI => {
        this.listThought.push(...listLoadedFromAPI); //Pegando o resultado da lista e acrescendo aos já existentes
        if (!listLoadedFromAPI.length) {
          this.carregarMaisPensamentosList = false;
        }
      })
  }

  searchThoughts() {
    this.carregarMaisPensamentosList = true; //Botao de carregar mais pensamentos sempre renderizado
    this.currentPage = 1; //Reiniciando a página de busca. (Quantidade de pensamentos mostrados. Para 1)
    this.service.listIt(this.currentPage, this.filterSearch, this.favorite)
      .subscribe(thoughtsSearched => {
        this.listThought = thoughtsSearched;
      })
  }

  listFavoritesSentences() {
    this.carregarMaisPensamentosList = true;
    this.currentPage = 1;
    this.service.listIt(this.currentPage, this.filterSearch, this.favorite = true)
      .subscribe(fauvoriteList => {
        this.listThought = fauvoriteList;
        this.listFavoriteToChildComponent = fauvoriteList;
      })
  }
}
