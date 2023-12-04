import { Component } from '@angular/core';
import { ThoughtInterface } from '../ITthought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Xliff } from '@angular/compiler';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent {
  // pensamentoEditado: ThoughtInterface = {
  //   id: 0,
  //   conteudo: '',
  //   autoria: '',
  //   modelo: '',
  // }

  form!: FormGroup;

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  //Construindo o formBuilder baseado numa requisicao de por id
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((resultedThought) => {
      this.form = this.formBuilder.group({
        id: [resultedThought.id],
        conteudo: [resultedThought.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [resultedThought.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [resultedThought.modelo]
      })
    })
  }

  // ngOnInit(): void {
  //   const id = this.route.snapshot.paramMap.get('id')
  //   this.form = this.formBuilder.group({
  //     id: `${id}`,
  //     conteudo: ['', Validators.compose([
  //       Validators.required,
  //       Validators.pattern(/(.|\s)*\S(.|\s)*/)
  //     ])],
  //     autoria: ['', Validators.compose([
  //       Validators.required,
  //       Validators.minLength(3)
  //     ])],
  //     modelo: ['modelo1']
  //   })
  // }

  // this.service.getById(parseInt(id!)).subscribe((thoughtCaughtById) => {
  //   this.pensamentoEditado = thoughtCaughtById;
  // })

  editThought() {
    console.log('VALIDO?', this.form.valid);
    console.log('FORM?', this.form.value);
    if (this.form.value) {
      // this.service.editThought(this.pensamentoEditado).subscribe(() => {
      this.service.editThought(this.form.value).subscribe(() => {
        this.router.navigate(['/list-thought'])
      })
    }
  }

  habilitarBotao(): string {
    console.log(this.form);
    if (this.form.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

  cancelEdit() {
    this.router.navigate(['/list-thought'])
  }
}
