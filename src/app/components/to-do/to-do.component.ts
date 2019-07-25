import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { MatTableDataSource } from '@angular/material';
import { ToDo } from 'src/app/models/toDo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

 // toDos: any;

  dataSource: ToDo[];

  displayedColumns: string[] = ['isFinished', 'description', 'updatedAt', 'actions'];

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.getToDos();
  }

  getToDos(): void {
    this.toDoService.getToDos().subscribe( todos => this.dataSource = todos);
  }

  updateToDoStatus(id): void {
    const todo = this.dataSource.find(a => a.id === id);
    todo.isFinished = !todo.isFinished;
    this.toDoService.putToDo(todo).subscribe();
  }

  deleteToDo(id): void {
    console.log(id);
    this.toDoService.deleteToDo(id).subscribe(() => this.getToDos());
  }
}
