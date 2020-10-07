import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servername = 'Zhaohan Server';
  serverid = 7;
  allowNewServer = false;
  result  = '';
  characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  charactersLength = this.characters.length;
  newservername='Default Server';
  createserverstatus='no server created!';
  oddserver = true;
  canshow= false;
  servers = ['server1','server2'];

  getServerOwner(){
    if(this.serverid%2 == 0){
      this.oddserver = false;
      return 'Server Owner is Zhaohan';
    } else{
      this.oddserver = true;
      return 'Server Owner is not Zhaohan';
    }
  }

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
  }

  ngOnInit(): void {
  }

  onRandomServer(){
    
    for ( let i = 0; i < 7; i++ ) {
      this.result = this.characters.charAt(Math.floor(Math.random() * 7));
   }
    this.servername = this.result;
    this.serverid = Math.round(Math.random() * 100);
  }

  onInputServer(event:Event){
    this.servername = (<HTMLInputElement>event.target).value;
  }

  onCreateNewServer(){
  
    this.createserverstatus = 'New Server Created!';

  }

  onShowme(){
    this.canshow=true;
  }
  onHide(){
    this.canshow=false;
  }

  getColor(){
    return this.canshow === false ? 'red':'Green'; 
  }

  onAddRandomServer(){
    this.result = '';
    this.createserverstatus = 'New Server Created!';
    for ( let i = 0; i < 7; i++ ) {
      this.result += this.characters.charAt(Math.floor(Math.random() * 7));
   }
    this.servers.push(this.result);
   console.log(this.servers);
  }
  }
