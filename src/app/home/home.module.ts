import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeSearchbarComponent } from './home-header/home-searchbar/home-searchbar.component';
import { LandingpageDiashowComponent } from './landingpage-diashow/landingpage-diashow.component';
import { RecommendedRoomsComponent } from './landingpage-diashow/recommended-rooms/recommended-rooms.component';
import { NewRoomsComponent } from './landingpage-diashow/new-rooms/new-rooms.component';
import { RandomRoomsComponent } from './landingpage-diashow/random-rooms/random-rooms.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { MemberCommentsComponent } from './member-comments/member-comments.component';
import { RoomRotateComponent } from '../shared/services/rooms/room-rotate/room-rotate.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeSearchbarComponent,
    LandingpageDiashowComponent,
    RecommendedRoomsComponent,
    NewRoomsComponent,
    RandomRoomsComponent,
    WelcomeMessageComponent,
    MemberCommentsComponent,
    RoomRotateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule {

}
