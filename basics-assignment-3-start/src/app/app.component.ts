import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaystatus = false;
  loginfo = [];
  length = 0;


  onToggleDisplay(){
     this.displaystatus === false ? this.displaystatus = true : this.displaystatus = false;
     this.length+=1;
     this.loginfo.push(new Date());
  }


}
