import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  // O Input diz que a proprieade pensamento, receberá informações de componente pai, e não daqui
  @Input() pensamento = {
    conteudo: "I love Angular",
    autoria: "Yuri Cruz",
    modelo: "modelo1"
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return "pensamento-g"
    }

    return "pensamento-p"
  }

}
