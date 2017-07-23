import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeSearchbarComponent } from '../shared/home-searchbar/home-searchbar.component';
import { LandingpageDiashowComponent } from './landingpage-diashow/landingpage-diashow.component';
import { RecommendedRoomsComponent } from './landingpage-diashow/recommended-rooms/recommended-rooms.component';
import { NewRoomsComponent } from './landingpage-diashow/new-rooms/new-rooms.component';
import { RandomRoomsComponent } from './landingpage-diashow/random-rooms/random-rooms.component';
import { RoomRotateComponent } from './landingpage-diashow/room-rotate/room-rotate.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { MemberCommentsComponent } from './member-comments/member-comments.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
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
    SharedModule,
    FormsModule
  ]
})
export class HomeModule {

}
