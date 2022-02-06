import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

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
    private uiservice:UiService,
    private router:Router
  ) {
    this.subscription = this.uiservice.onToggle().subscribe(value => this.showaddtask = value)
   }


  ngOnInit(): void {
  }

  toogleAddTask(){
    this.uiservice.toogleAddTask();
  }

  hasRoute(route:string){
    return this.router.url == route
  }

}
