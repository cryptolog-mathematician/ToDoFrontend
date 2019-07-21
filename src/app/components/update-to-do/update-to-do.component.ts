import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ToDo } from 'src/app/models/toDo';

@Component({
  selector: 'app-update-to-do',
  templateUrl: './update-to-do.component.html',
  styleUrls: ['./update-to-do.component.css']
})
export class UpdateToDoComponent implements OnInit {

  toDo = new ToDo();

  constructor(
    private toDoService: ToDoService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getToDo();
    console.log('todo', this.toDo.description);
  }

  getToDo(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.toDoService.getToDo(id)
    .subscribe(todo => this.toDo = todo);
  }

  updateToDo(): void {
    this.toDoService.putToDo(this.toDo)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
