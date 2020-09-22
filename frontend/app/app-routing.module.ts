import { Routes, RouterModule } from '@angular/router';
//import { RouteGuardService } from './service/route-guard.service';
import { AddteamComponent } from './addteam/addteam.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { GameComponent } from './game/game.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { WinnerComponent } from './winner/winner.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},//, canActivate:[RouteGuardService]},
  { path: 'addteam', component: AddteamComponent}, //, canActivate:[RouteGuardService] },
  { path: 'addplayer', component:AddplayerComponent},//, canActivate:[RouteGuardService] },
  { path: 'game', component: GameComponent},//, canActivate:[RouteGuardService] },
  { path: 'leaderboard', component: LeaderboardComponent}
  //{ path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//
