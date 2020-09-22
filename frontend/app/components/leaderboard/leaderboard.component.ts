import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from '../service/data/player-data.service';
import { Player } from '../model/player';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  players: Player[];
  constructor(
    private services:PlayerDataService
  ) { }

  ngOnInit(): void {
   this.players = [];
     
    this.services.getScore().
    subscribe(
      data =>{  this.players=data} 
      )
    
  }

}
