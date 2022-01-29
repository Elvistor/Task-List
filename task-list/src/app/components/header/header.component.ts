import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'Task-List';
  showaddtask: boolean = false;
  subscription?:Subscription;

  constructor(
    private uiservice:UiService
  ) {
    this.subscription = this.uiservice.onToggle().subscribe(value => this.showaddtask = value)
   }


  ngOnInit(): void {
  }

  toogleAddTask(){
    this.uiservice.toogleAddTask();
  }

}
