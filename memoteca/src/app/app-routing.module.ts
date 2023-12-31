import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListToughtsComponent } from './components/thoughts/list-toughts/list-toughts.component';
import { DeleteToughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

import { RouteReuseStrategy } from '@angular/router';
import { CustomReuseStrategy } from '../../../memoteca/src/app/components/thoughts/list-toughts/custom-reuse-estrategy'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-thought',
    pathMatch: 'full',
    data: {
      reuseComponent: true
    }
  }, {
    path: 'list-thought',
    component: ListToughtsComponent
  },
  {
    path: 'create-thought',
    component: CreateThoughtComponent
  },
  {
    path: 'pensamentos/delete-thought/:id',
    component: DeleteToughtComponent
  }
  ,
  {
    path: 'pensamentos/edit-thought/:id',
    component: EditThoughtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ],
})
export class AppRoutingModule { }
