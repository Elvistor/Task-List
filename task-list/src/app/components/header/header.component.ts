import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  title:string = 'Task-List';

  ngOnInit(): void {
  }

  toogleAddTask(){
    console.log("toogleAddTask()");
  }

}
