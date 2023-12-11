import { Component } from '@angular/core';
import { ThoughtInterface } from '../ITthought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lowerCaseValidator } from './lowerCaseValidator';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent {
  // pensamentoFeito: ThoughtInterface = {
  //   conteudo: "",
  //   autoria: "",
  //   modelo: ""
  // }

  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  // criarPensamento() {
  //   alert("Clicado")
  // }

  ngOnInit() {
    this.form = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        lowerCaseValidator
      ])],
      modelo: ['modelo1'],
      favorite: [false]
    })
  }

  criarPensamento() {
    //Mostrando erros no console
    // console.log(this.form.status);
    console.log(this.form.get('autoria')?.errors);
    if (this.form.valid) {
      // this.service.createThought(this.pensamentoFeito).subscribe(() => {
      this.service.createThought(this.form.value).subscribe(() => {
        this.router.navigate(['/list-thought'])
      })
    }
  }

  cancelandoPensamento() {
    this.router.navigate(['/list-thought'])
  }

  habilitarBotao(): string {
    console.log(this.form);
    if (this.form.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }
}
