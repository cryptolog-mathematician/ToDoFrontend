import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  toDos: any;


  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
    this.getToDos();
  }

  getToDos(): void {
    this.toDoService.getToDos()
    .subscribe(todos => this.toDos = todos);
  }


}
