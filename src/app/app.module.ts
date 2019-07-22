import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';
import { UpdateToDoComponent } from './components/update-to-do/update-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    CreateToDoComponent,
    UpdateToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
