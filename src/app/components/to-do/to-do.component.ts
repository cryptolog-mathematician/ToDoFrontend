import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

 // toDos: any;

  dataSource: any;

  displayedColumns: string[] = ['complated', 'description', 'updatedAt', 'actions'];

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.getToDos();
  }

  getToDos(): void {
    this.toDoService.getToDos().subscribe(
      todos => this.dataSource = todos
    );

  }

  updateToDoStatu(todo: any): void {
    todo.complated = !todo.complated;
    this.toDoService.putToDo(todo).subscribe();
  }

  deleteToDo(todo: any): void {
    this.toDoService.deleteToDo(todo.id).subscribe(
      this.dataSource = this.dataSource.filter(tod => tod !== todo)
    );
  }


}
