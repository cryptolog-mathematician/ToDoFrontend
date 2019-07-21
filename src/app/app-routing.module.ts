import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';
import { UpdateToDoComponent } from './components/update-to-do/update-to-do.component';


const routes: Routes = [
  {
    path: '', redirectTo: '/toDo', pathMatch: 'full'
  },
  {
    path: 'toDo', component: ToDoComponent
  },
  {
    path: 'createNewToDo', component: CreateToDoComponent
  },
  {
    path: 'updateToDo/:id', component: UpdateToDoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
