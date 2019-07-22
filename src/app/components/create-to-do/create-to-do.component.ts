import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/services/to-do.service';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Location } from '@angular/common';

import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-to-do',
  templateUrl: './create-to-do.component.html',
  styleUrls: ['./create-to-do.component.css']
})
export class CreateToDoComponent implements OnInit {

  toDo = {description: ''};

  toDoForm = this.fb.group ({
    description: ['', Validators.required]
  });

  matcher = new MyErrorStateMatcher();

  constructor(
    private toDoService: ToDoService,
    private fb: FormBuilder,
    private location: Location
  ) { }

  ngOnInit() {
  }

  get validation() {
    return this.toDoForm.controls.description;
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
