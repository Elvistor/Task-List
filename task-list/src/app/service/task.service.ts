import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'
//importamos la interfaz
import {Task} from '../Task';
//importamos el mockup
import {TASKS} from '../mock-task';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/task';

  constructor(
    private http:HttpClient
  ) { }

  getTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL)
  };

  deleteTask(task:Task):Observable<Task>{
    const url = this.apiURL+"/"+task.id
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const url = this.apiURL+"/"+task.id
    return this.http.put<Task>(url, task, httpOptions)
  };
}
