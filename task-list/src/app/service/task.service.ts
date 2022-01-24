import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http'
//importamos la interfaz
import {Task} from '../Task';
//importamos el mockup
import {TASKS} from '../mock-task';
import { Observable, of } from 'rxjs';

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
}
