import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MdDatepickerModule, MdNativeDateModule, MdCheckboxModule } from '@angular/material';

import { RoomProfileComponent } from '../room-profile/room-profile.component';
import { RoomHeaderComponent } from './room-header/room-header.component';
import { BookingSectionComponent } from './booking-section/booking-section.component';
import { RoomAttributesComponent } from './room-attributes/room-attributes.component';
import { LandlordInfosComponent } from './landlord-infos/landlord-infos.component';
import { RankingSectionComponent } from './ranking-section/ranking-section.component';
import { RoomCommentsComponent } from './room-comments/room-comments.component';


@NgModule({
  declarations: [
    RoomProfileComponent,
    RoomHeaderComponent,
    BookingSectionComponent,
    RoomAttributesComponent,
    LandlordInfosComponent,
    RankingSectionComponent,
    RoomCommentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule
  ]
})
export class RoomProfileModule {

}