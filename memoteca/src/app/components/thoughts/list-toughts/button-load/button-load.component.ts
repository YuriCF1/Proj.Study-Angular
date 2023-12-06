import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-load',
  templateUrl: './button-load.component.html',
  styleUrls: ['./button-load.component.css']
})
export class ButtonLoadComponent {

  //Para a propriedade receba informacoes do componente pai = @Input
  @Input() carregarMaisPensamentosButton: boolean = false;

}
