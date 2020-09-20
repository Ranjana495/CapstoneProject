import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from '../../model/player';
@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor(
    private http:HttpClient
    ) {  }

  addPlayer(player)
  {
    return this.http.post('http://localhost:8080/jpa/player',player);
    
  }
  getPlayers()
  {
    return this.http.get<Player[]>('http://localhost:8080/jpa/players');
  }
 
  getPlayerByTeam(teamname)
  {
    return this.http.get<Player[]>(`http://localhost:8080/${teamname}/player`);
  }

 /* getRandomPlayersA(){
    console.log("Welcome1");
    return this.http.get<Player[]>('http://localhost:8080/player/Amigos');
  }
  
  getRandomPlayersB(){
    console.log("Welcome1");
    return this.http.get<Player[]>('http://localhost:8080/player/Bosses');
  }
  
  getRandomPlayersChamp(){
    console.log("Welcome1");
    return this.http.get<Player[]>('http://localhost:8080/player/Champions');
  }
  
  getRandomPlayersR(){
    console.log("Welcome1");
    return this.http.get<Player[]>('http://localhost:8080/player/Royal Challengers');
  }
  
  getRandomPlayersChap(){
    console.log("Welcome1");
    return this.http.get<Player[]>('http://localhost:8080/player/Chaplin');
  }
  
  getRandomPlayersChar(){
    console.log("Welcome1");
    return this.http.get<Player[]>('http://localhost:8080/player/Charlie');
  }*/
}
