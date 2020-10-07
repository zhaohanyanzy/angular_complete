import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {

  username = '';
  buttonstatus = true;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onResetUsername(){
    this.username='';
  }
  onCheckButtonStatus(){
    if(this.username==''){
      this.buttonstatus=true;
      return this.buttonstatus;
    }else{
      this.buttonstatus=false;
      return this.buttonstatus;
    }
  }
}
