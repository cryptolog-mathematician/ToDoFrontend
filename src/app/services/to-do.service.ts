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

  getToDo(id: number): Observable< any > {
    const url =  `${this.toDoUrl}/${id}`;
    return this.http.get <any > (url)
    .pipe(
      retry(3)
    );
  }

  postToDo(todo: any): Observable<any> {
    return this.http.post<any>(this.toDoUrl, todo, httpOptions )
    .pipe(
      retry(3)
    );
  }

  putToDo(todo: any): Observable<any> {
    const url = `${this.toDoUrl}/${todo.id}`;
    return this.http.put<any>(url, todo, httpOptions)
    .pipe(
      retry(3)
    );
  }

  deleteToDo(id: number): Observable<any> {
    const url = `${this.toDoUrl}/${id}`;
    return this.http.delete(url);
  }
}
