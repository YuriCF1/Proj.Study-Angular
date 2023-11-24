import { Component } from '@angular/core';
import { ThoughtInterface } from '../ITthought';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thought',
  templateUrl: './edit-thought.component.html',
  styleUrls: ['./edit-thought.component.css']
})
export class EditThoughtComponent {

  constructor(
    private service: ThoughtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  pensamentoEditado: ThoughtInterface = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getById(parseInt(id!)).subscribe((thoughtCaughtById) => {
      this.pensamentoEditado = thoughtCaughtById
    })
  }

  editThought() {
    this.service.editThought(this.pensamentoEditado).subscribe(() => {
      this.router.navigate(['/list-thought'])
    })
  }


  cancelEdit() {
    this.router.navigate(['/list-thought'])
  }
}
