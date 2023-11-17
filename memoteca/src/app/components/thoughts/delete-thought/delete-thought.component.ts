import { Component } from '@angular/core';
import { ThoughtInterface } from '../ITthought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-tought',
  templateUrl: './delete-thought.component.html',
  styleUrls: ['./delete-thought.component.css']
})
export class DeleteToughtComponent {

  pensamento: ThoughtInterface = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    //snapshot pega a rota no momento que foi acessada
    //paramMap contém todos os parâmetros de rota presentes na URL no momento da inicialização do componente.
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  deleteThought() {
    // alert("CARALHO");
    if (this.pensamento.id) {
      this.service.deleteThought(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/list-thought'])
      })
    }
  }

  cancel() {
    alert("a");
    this.router.navigate(['/list-thought'])
  }
}
