import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MdDatepickerModule, MdNativeDateModule, MdCheckboxModule } from '@angular/material';
import { DateTimePickerModule } from 'ng-pick-datetime';

import { RoomProfileComponent } from '../room-profile/room-profile.component';
import { RoomHeaderComponent } from './one-room/room-header/room-header.component';
import { BookingSectionComponent } from './one-room/booking-section/booking-section.component';
import { RoomAttributesComponent } from './one-room/room-attributes/room-attributes.component';
import { LandlordInfosComponent } from './one-room/landlord-infos/landlord-infos.component';
import { RankingSectionComponent } from './one-room/ranking-section/ranking-section.component';
import { RoomCommentsComponent } from './one-room/room-comments/room-comments.component';
import { OneRoomComponent } from './one-room/one-room.component';


@NgModule({
  declarations: [
    RoomProfileComponent,
    RoomHeaderComponent,
    BookingSectionComponent,
    RoomAttributesComponent,
    LandlordInfosComponent,
    RankingSectionComponent,
    RoomCommentsComponent,
    OneRoomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule,
    DateTimePickerModule
  ]
})
export class RoomProfileModule {

}
