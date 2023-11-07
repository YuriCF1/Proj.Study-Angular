import { Component } from '@angular/core';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  pensamento = {
    id: '1',
    conteudo: "Aprendendo Angular",
    autoria: "Dev",
    modelo: "modelo1"
  }

  criarPensamento() {
    alert("Clicado")
  }
  cancelandoPensamento() {
    alert("Cancelado")
  }
}
