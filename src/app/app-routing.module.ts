import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoComponent } from './components/to-do/to-do.component';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';


const routes: Routes = [
  {
    path: 'toDo', component: ToDoComponent
  },
  {
    path: 'createNewToDo', component: CreateToDoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
