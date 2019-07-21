import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
})
export class CreateToDoComponent implements OnInit {

  toDo = {description: ''};

  toDoForm = this.fb.group ({
    description: ['']
  });

  constructor(
    private toDoService: ToDoService,
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.toDo.description = this.toDoForm.get(['description']).value;
    this.toDoService.postToDo(this.toDo)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
