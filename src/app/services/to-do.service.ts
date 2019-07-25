import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry } from 'rxjs/operators';
import { ToDo } from '../models/toDo';


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

   dummyData: ToDo[] = [
    new ToDo(1, 'cok onemli', new Date()),
    new ToDo(2, 'süt al', new Date()),
    new ToDo(3, 'okula git', new Date()),
    new ToDo(4, 'programla', new Date()),
   ]

  constructor(private http: HttpClient) { }

  getToDos(): Observable<any> {
    return of(this.dummyData);
    // return this.http.get<any>(this.toDoUrl);
  }

  getToDo(id: number): Observable< any > {
    return of(this.dummyData.find(a => a.id === id));
    /*
    const url =  `${this.toDoUrl}/${id}`;
    return this.http.get <any > (url)
    .pipe(
      retry(3)
    );
    */
  }

  postToDo(todo: any): Observable<any> {
    /*
    return this.http.post<any>(this.toDoUrl, todo, httpOptions )
    .pipe(
      retry(3)
    );
    */
     this.dummyData.push(todo);
     return of(todo);
  }

  putToDo(todo: any): Observable<any> {
     
    const index = this.dummyData.findIndex(a => a.id === todo.id);
    this.dummyData[index] = todo;
    return of(todo);
    /*
    const url = `${this.toDoUrl}/${todo.id}`;
    return this.http.put<any>(url, todo, httpOptions)
    .pipe(
      retry(3)
    );
    */
  }

  deleteToDo(id: number): Observable<any> {
    
    this.dummyData = this.dummyData.filter(a => a.id != id);
    return of(this.dummyData);
    /*
    const url = `${this.toDoUrl}/${id}`;
    return this.http.delete(url);
    */
  }
}
