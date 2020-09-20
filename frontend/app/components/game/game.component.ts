import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Team } from '../model/team';
import { Player } from '../model/player';
import { Score } from '../model/score';
import { TeamDataService } from '../service/data/team-data.service';
import { PlayerDataService } from '../service/data/player-data.service';
import { ScoreService } from '../service/data/score.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Input()  teams: Team[];
   randomteam:Team[];
  player:Player[]; score:Score[];
  randomplayer1:Player[];randomplayer2:Player[];randomplayer3:Player[];randomplayer4:Player[];randomplayer5:Player[];
  randomplayer6:Player[];
  x:number ; y:number;z:number;
  randx:number;  randy:number;  randz:number;
  s1:number; s2:number;s3:number;ts1:number; ts2:number;ts3:number;
  a:number ; b:number;c:number;
  randa:number;  randb:number;  randc:number;aaa:number;
  winnerName:String;count:number;count1:number;winnerTeam:String;
  //tname='' 
  message:String;
  constructor(
    private router: Router,
    private service:TeamDataService,
    private services:PlayerDataService,
    private scoreSer:ScoreService
  ) {this.s1=0;this.s2=0;this.s3=0;this.ts1=0;this.ts2=0;this.ts3=0;this.winnerName='';this.winnerTeam='';this.count=0;this.count1=0;}

  ngOnInit() {
    this.teams = [];

    this.service.getTeams().subscribe(t => {
       t.forEach(value => {
         this.teams.push(value);
       });
        },
     )
    this.player = [];
    this.services.getPlayers().subscribe(p => {
      p.forEach(value => {
        this.player.push(value);
      });},)
      this.score=[];
      for(var i=0;i<this.player.length;i++){
          this.score[i].name=(this.player[i].playername);
      }

}
  randomTeam()
  {
    this.randomteam=[];
    this.service.getRandomTeams().subscribe(
       data =>{this.randomteam=data;}
     )
     console.log("executed")
    }

  randomPlayer(){
    this.randomplayer1=[];this.randomplayer2=[];this.randomplayer3=[];this.randomplayer4=[];this.randomplayer5=[]; 
    this.randomplayer6=[];
      this.services.getPlayerByTeam(this.randomteam[0].teamname).subscribe(data=>
        {this.randomplayer1=data;this.services.getPlayerByTeam(this.randomteam[1].teamname).subscribe(data=>
         { this.randomplayer2=data;this.services.getPlayerByTeam(this.randomteam[2].teamname).subscribe(data=>
         { this.randomplayer3=data;})
          })})
      }
      
  addRound1Score()
   {
    this.count += 1;
    if(this.count >= 3) {
      (document.getElementById("1") as HTMLInputElement).disabled = true;
    }
    
        this.x=  parseInt((document.getElementById("number1") as HTMLInputElement).value);
        this.randx=(Math.floor(Math.random() * (this.x)+1) )*10;
       console.log(this.randx);
       this.s1+=this.randx;
        
       this.y=  parseInt((document.getElementById("number2") as HTMLInputElement).value);
       this.randy=(Math.floor(Math.random() * (this.y)+1))*10 ;
       console.log(this.randy);
       this.s2+=this.randy;

       this.z=  parseInt((document.getElementById("number3") as HTMLInputElement).value);
       this.randz=(Math.floor(Math.random() * (this.z)+1))*10 ;
       console.log(this.randz);
       this.s3+=this.randz;

    /*   for(var j=0;j<this.maxScore.length;j++){
       if(this.score[j].name==this.randomplayer1[0].playername){this.score[j].scoreval=this.s1;}
       else if(this.score[j].name==this.randomplayer2[1].playername){this.score[j].scoreval=this.s2;} 
       else if(this.score[j].name==this.randomplayer3[1].playername){this.score[j].scoreval=this.s3;} 
       else if(this.score[j].name==this.randomplayer1[1].playername){this.score[j].scoreval=this.ts1;} 
       else if(this.score[j].name==this.randomplayer2[0].playername){this.score[j].scoreval=this.ts2;} 
       else if(this.score[j].name==this.randomplayer3[0].playername){this.score[j].scoreval=this.ts3;} 
       else{this.score[j].scoreval=0;}
      }
      if(this.count==3){
          this.scoreSer.saveScore(this.score).subscribe(
          data =>{  console.log("Executed")} 
        )
      }*/

    }
   
    addRound2Score(){
      this.count1 += 1;
     if(this.count1 >= 3) {
      (document.getElementById("2") as HTMLInputElement).disabled = true;
     }
    
      this.a=  parseInt((document.getElementById("number4") as HTMLInputElement).value);
      this.randa=(Math.floor(Math.random() * (this.a)+1))*10 ;
     console.log(this.randa);
     this.ts1+=this.randa;
    
     this.b=  parseInt((document.getElementById("number5") as HTMLInputElement).value);
     this.randb=(Math.floor(Math.random() * (this.b)+1))*10 ;
     console.log(this.randb);
     this.ts2+=this.randb;

     this.c=  parseInt((document.getElementById("number6") as HTMLInputElement).value);
     this.randc=(Math.floor(Math.random() * (this.c)+1))*10 ;
     console.log(this.randc);
     this.ts3+=this.randc;
    } 

    maxScore(){
    this.aaa=Math.max(this.s1, this.s2,this. s3,this.ts1,this.ts2,this.ts3);
    console.log(this.aaa);
     if(this.aaa==this.s1){this.winnerName=this.randomplayer1[0].playername;this.winnerTeam=this.randomTeam[0].teamname;}
     if(this.aaa==this.s2){this.winnerName=this.randomplayer2[1].playername;this.winnerTeam=this.randomTeam[1].teamname;}
     if(this.aaa==this.s3){this.winnerName=this.randomplayer3[1].playername;this.winnerTeam=this.randomTeam[2].teamname;}
     if(this.aaa==this.ts1){this.winnerName=this.randomplayer1[1].playername;this.winnerTeam=this.randomTeam[0].teamname;}
     if(this.aaa==this.ts2){this.winnerName=this.randomplayer2[0].playername;this.winnerTeam=this.randomTeam[1].teamname;}
     if(this.aaa==this.ts3){this.winnerName=this.randomplayer3[0].playername;this.winnerTeam=this.randomTeam[2].teamname;}
      // this.message='Winner of the game is  Team Name:this.winnerTeam   Player Name:this.winnerName Score:this.aaa';
       //this.service.changeMessage(this.message);
    }
}