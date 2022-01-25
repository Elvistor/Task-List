import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Task} from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[]=[];
 
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks)=>[
      this.tasks = tasks
    ]);
  }

  deleteTask(task:Task){
    console.log("Mensaje recibido");
    //this.taskService.deleteTask(task).subscribe(()=>{
    //  this.tasks = this.tasks.filter(t=>t.id != task.id)
    //})
  }
}
