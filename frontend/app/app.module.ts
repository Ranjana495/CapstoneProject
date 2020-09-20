import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RegistrationComponent } from './registration/registration.component';
//import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AddteamComponent } from './addteam/addteam.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { WelcomeComponent } from './welcome/welcome.component'
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { WinnerComponent } from './winner/winner.component';

@NgModule({
  declarations: [
    AppComponent,
    AddteamComponent,
    AddplayerComponent,
    WelcomeComponent,
    GameComponent,
    LeaderboardComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   //Angular2FontawesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
