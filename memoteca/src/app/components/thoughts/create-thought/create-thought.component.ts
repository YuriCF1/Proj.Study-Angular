import { Component } from '@angular/core';
import { ThoughtInterface } from '../ITthought';
import { ThoughtService } from '../thought.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      conteudo: ['Formulario reativo', [Validators.required]],
      autoria: ['Angular', [Validators.required]],
      modelo: ['modelo1']
    })
  }

  criarPensamento() {
    console.log(this.form);
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
}
