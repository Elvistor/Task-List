import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showaddtask:boolean =false;
  private subjet = new Subject<any>();

  constructor() {
    
   }

  toogleAddTask(): void{

    this.showaddtask = !this.showaddtask;
    this.subjet.next(this.showaddtask);
  }

  onToggle():Observable<any>{
    return this.subjet.asObservable();
  }
}
