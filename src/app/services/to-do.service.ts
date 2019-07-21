import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json' }
  )
};

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  toDoUrl = '//localhost:8080/app/todos';

  constructor(private http: HttpClient) { }

  getToDos(): Observable<any> {
    return this.http.get<any>(this.toDoUrl);
  }

  postToDo(todo: any): Observable<any> {
    return this.http.post<any>(this.toDoUrl, todo, httpOptions )
    .pipe(
      retry(3)
    );
  }
}
