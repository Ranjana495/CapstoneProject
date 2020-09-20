import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http:HttpClient) { }
  
  saveScore(score)
  {
    return this.http.post('http://localhost:8080/jpa/score',score);
    
  }

}
