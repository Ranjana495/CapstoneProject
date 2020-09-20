import { Component, OnInit } from '@angular/core';
import { TeamDataService } from '../service/data/team-data.service';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  constructor(
    private service:TeamDataService
  ) { }

  ngOnInit(){

    
      this.service.newWinner.subscribe(
        data=>console.log(data)

      )
    
  }

}
