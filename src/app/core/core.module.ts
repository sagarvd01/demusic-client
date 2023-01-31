import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontPageComponent } from './front-page/front-page.component';
import { PlayerComponent } from './player/player.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FrontPageComponent,
    PlayerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FrontPageComponent,
    PlayerComponent
  ]
})
export class CoreModule { }
