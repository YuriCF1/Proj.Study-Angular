import { Component } from '@angular/core';
import { ThoughtInterface } from '../ITthought';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-list-toughts',
  templateUrl: './list-toughts.component.html',
  styleUrls: ['./list-toughts.component.css']
})
export class ListToughtsComponent {

  listThought: ThoughtInterface[] = [
    // {
    //   id: 1,
    //   conteudo: "Passo informações para o componente filho",
    //   autoria: "Componente pai",
    //   modelo: "modelo3"
    // }, {
    //   id: 2,
    //   conteudo: "Minha propriedade é decorado com @Input",
    //   autoria: "Componente filho",
    //   modelo: "modelo2"
    // }
    // , {
    //   id: 3,
    //   conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate vehicula dolor, at tempor elit malesuada ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque turpis tellus, imperdiet ut neque nec, feugiat vehicula justo. Aliquam ut velit felis. Sed iaculis ac lorem eu dapibus. Donec ac semper quam. Curabitur interdum urna eget urna tincidunt, a consectetur augue pulvinar. Aenean rutrum felis eget leo bibendum venenatis. Integer et pulvinar quam, bibendum sollicitudin augue. Suspendisse potenti. Mauris lectus justo, placerat quis pulvinar sit amet, scelerisque eget massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin consectetur hendrerit arcu, eget luctus urna semper ac. Vestibulum mauris erat, mattis eget orci commodo, mattis varius metus. Maecenas fermentum rutrum est, id fermentum libero tempus id. Curabitur ut auctor quam.",
    //   autoria: "Componente filho",
    //   modelo: "modelo2"
    // }
  ]
  currentPage: number = 1;
  carregarMaisPensamentosList: boolean = true;
  filterSearch: string = '';


  constructor(private service: ThoughtService) { }

  //ngOnInit executa o algoritmo assim que o component é iniciado
  ngOnInit(): void {
    // this.service.listIt(this.currentPage, this.filterSearch).subscribe((listaDePensamento) => {
    //   this.listThought = listaDePensamento
    // })

    this.listAllThoughts()
  }

  listAllThoughts() {
    this.service.listIt(this.currentPage, this.filterSearch).subscribe((listaDePensamento) => {
      this.listThought = listaDePensamento
    })
  }

  loadMoreThoughts() {
    //++ = incrementando o número de páginas para carregar os outros pensamentoss
    this.service.listIt(++this.currentPage, this.filterSearch)
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
    this.service.listIt(this.currentPage, this.filterSearch)
      .subscribe(thoughtsSearched => {
        this.listThought = thoughtsSearched;
      })
  }

  listFavoritesSentences() {
    this.carregarMaisPensamentosList = true;
    this.currentPage = 1;
    this.service.listFavorites(this.currentPage, this.filterSearch)
      .subscribe(fauvouriteList => {
        this.listThought = fauvouriteList;
      })

  }
}
