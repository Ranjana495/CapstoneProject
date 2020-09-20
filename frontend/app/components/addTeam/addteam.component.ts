import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {TeamDataService} from './../service/data/team-data.service'
import {Team} from './../model/team'

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit {
  team : Team;
  
  bodyDiv = true;
  //@Output() buttonClicked = new EventEmitter();
 
  constructor(
    private router: Router,
    private service:TeamDataService
  ) { this.team= new Team() }

  ngOnInit(): void {
  }
  
  addPlayer(){
     //let teamId = Number(document.getElementById('this.team.id'));
    //sessionStorage.setItem('ID', teamId.toString());
   // this.bodyDiv = true;
    //this.team.tid =parseInt((<HTMLInputElement>document.getElementById("teamId")).value);
    //console.log(this.team.tid)
    //this.buttonClicked.emit(this.bodyDiv);
    //this.buttonClicked.emit(this.team.tid );
    
   // this.bodyDiv=false;
    //console.log(`addplayer ${id}`)
    this.router.navigate(['addplayer'])
    //return;
  }
  
  registerTeam(){
    this.service.saveTeam(this.team)
       .subscribe(
         data =>   { console.log(data)}
       );
  
  }         

}
