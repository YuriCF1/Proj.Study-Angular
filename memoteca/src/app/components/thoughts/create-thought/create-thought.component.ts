import { Component } from '@angular/core';
import { ThoughtInterface } from '../ITthought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  pensamentoFeito: ThoughtInterface = {
    conteudo: "",
    autoria: "",
    modelo: ""
  }

  constructor(
    private service: ThoughtService,
    private router: Router) { }

  // criarPensamento() {
  //   alert("Clicado")
  // }

  criarPensamento() {
    this.service.createThought(this.pensamentoFeito).subscribe(() => {
      this.router.navigate(['/list-thought'])
    })
  }

  cancelandoPensamento() {
    this.router.navigate(['/list-thought'])
  }
}
