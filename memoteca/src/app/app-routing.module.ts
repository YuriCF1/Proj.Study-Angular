import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListToughtsComponent } from './components/thoughts/list-toughts/list-toughts.component';
import { DeleteToughtComponent } from './components/thoughts/delete-thought/delete-thought.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-thought',
    pathMatch: 'full'
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
