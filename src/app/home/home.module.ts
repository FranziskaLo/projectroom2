import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeSearchbarComponent } from '../shared/home-searchbar/home-searchbar.component';
import { RoomCategoriesComponent } from './room-categories/room-categories.component';
import { RecommendedRoomsComponent } from './room-categories/recommended-rooms/recommended-rooms.component';
import { NewRoomsComponent } from './room-categories/new-rooms/new-rooms.component';
import { RandomRoomsComponent } from './room-categories/random-rooms/random-rooms.component';
import { RoomRotateComponent } from './room-categories/room-rotate/room-rotate.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { MemberCommentsComponent } from './member-comments/member-comments.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    RecommendedRoomsComponent,
    NewRoomsComponent,
    RandomRoomsComponent,
    WelcomeMessageComponent,
    MemberCommentsComponent,
    RoomRotateComponent,
    RoomCategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule {

}
