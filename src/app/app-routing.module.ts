import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './core/front-page/front-page.component';
import { PlayerComponent } from './core/player/player.component';
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: FrontPageComponent
    },
    {
        path: 'player',
        component: PlayerComponent,
        // canActivate: [AuthGuard]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
