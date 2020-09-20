import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from '../../model/team';
//import { Subject } from 'rxjs/Subject';
//import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';

//import { AddplayerComponent } from './addplayer/addplayer.component';
@Injectable({
  providedIn: 'root'
})
export class TeamDataService {
  //private messageSource = new BehaviorSubject('default message');
  //currentMessage = this.messageSource.asObservable();
  public newWinner = new Subject<any>();
  constructor(
    private http:HttpClient
   
  ) { }

  saveTeam(teams)
  {
    return this.http.post('http://localhost:8080/jpa/team',teams);
    
  }

  getTeams()
  {
    return this.http.get<Team[]>('http://localhost:8080/jpa/team');
  }

  getRandomTeams()
  {
    return this.http.get<Team[]>('http://localhost:8080/team');
  }
  
  changeMessage(message) {
    this.newWinner.next(message)
  }
}
