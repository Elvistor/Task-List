import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter();
  id:number = 9;
  text:string = "";
  day:string ="";
  reminder:boolean = false;
  subscription?:Subscription;
  showaddtask:boolean =false;

  constructor(
    private uiservice:UiService
  ) { 
    this.subscription = this.uiservice.onToggle().subscribe(value => this.showaddtask = value)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.text.length == 0){
      alert("Please add a Task");
      return
    }
    const {id, text, day, reminder} = this
    const newTask={id, text, day, reminder}

    this.onAddTask.emit(newTask);
  }



}
