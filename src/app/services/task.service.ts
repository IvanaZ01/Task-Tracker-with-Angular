import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
 
const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type':'application/json'
})
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private endpoint = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.endpoint)

  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.endpoint}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): 
  Observable<Task>{
    const url = `${this.endpoint}/${task.id}`
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(task: Task){
    return this.http.post(this.endpoint, task, httpOptions)
  }
}
