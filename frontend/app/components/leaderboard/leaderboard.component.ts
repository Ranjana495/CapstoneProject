import { Component, OnInit } from '@angular/core';
import { TeamDataService } from '../service/data/team-data.service';
import { Team } from '../model/team';
@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  teams: Team[];
  constructor(
    private service:TeamDataService
  ) { }

  ngOnInit(): void {
    this.teams = [];

    this.service.getTeams().subscribe(t => {
       t.forEach(value => {
         this.teams.push(value);
       });
        },
     )
  }

}
