import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Player} from './../model/player'
import {PlayerDataService} from './../service/data/player-data.service'


@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {
player : Player
team_tid:number
count:number
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service:PlayerDataService
  ) {this.player= new Player() ;this.count=0;
  }


 // @Input()
  //player_tid:number;

  ngOnInit(): void {
   
  }
  
  savePlayer(){
    //this.player.teamid=value;
    this.count+=1;
          if(this.count<3){(document.getElementById("3") as HTMLInputElement).disabled = true;}
          else{(document.getElementById("3") as HTMLInputElement).disabled = false;}
      this.service.addPlayer(this.player)
       .subscribe(
         data => {
           console.log("Executed")
           
         }
         );

  }

  submit()
  {
    this.router.navigate(['game']) 
  }

}