import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  // O Input diz que a proprieade pensamento, receberá informações de componente pai
  @Input() pensamento = {
    conteudo: "I love Angular",
    autoria: "Yuri Cruz",
    modelo: "modelo1"
  }

}
