import { Observable } from 'rxjs';
import { ThoughtInterface } from './../ITthought';
import { Component, Input } from '@angular/core';
import { ThoughtService } from '../thought.service';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {

  constructor(private service: ThoughtService) {
  }

  // O Input diz que a proprieade pensamento, receberá informações de componente pai, e não daqui
  @Input() pensamento: ThoughtInterface = {
    id: 0,
    conteudo: "I love Angular",
    autoria: "Yuri Cruz",
    modelo: "modelo1",
    favorite: false
  }

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length > 256) {
      return "pensamento-g"
    }
    return "pensamento-p"
  }

  changeFavoriteIcon(): string {
    if (this.pensamento.favorite == false) {
      return 'inativo'
    } else {
      return 'ativo'
    }
  }

  updateFavoriteList() {
    this.service.changeFavoriteStatus(this.pensamento).subscribe();
  }
}
