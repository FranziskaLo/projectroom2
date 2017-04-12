import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { NewRoomsComponent } from '../../../../home/landingpage-diashow/new-rooms/new-rooms.component';
import { RoomBackendService } from '../room-backend/roomBackend.service';

import { RoomService } from '../room-backend/room.service';

@Component({
  selector: 'app-room-rotate',
  templateUrl: './room-rotate.component.html'
})

export class RoomRotateComponent implements OnInit {
  showRooms = true;
  roomPrevious: boolean;
  roomNext: boolean;
  private rooms: any[] = [];

  constructor(http: Http, private roomBackendService: RoomBackendService, private roomService: RoomService) { }

  // public getRooms = (data) => {
  //   this.rooms = data.standardRooms;
  // }

  ngOnInit() {
    // this.roomBackendService.getRooms().subscribe(
    //  this.getRooms
    // );
    this.getRoomsFromAPI();
  }

  getRoomsFromAPI(): void {
    this.roomService.getRooms().then(rooms => this.rooms = rooms);
  }

  pSelectedRoom = 2;
  mSelectedRoom = 1;
  nSelectedRoom = 0;

  next() {
    this.pSelectedRoom++;
    if (this.pSelectedRoom > this.rooms.length - 1) {
      this.pSelectedRoom = 0;
    }

    this.mSelectedRoom++;
    if (this.mSelectedRoom > this.rooms.length - 1) {
      this.mSelectedRoom = 0;
    }

    this.nSelectedRoom++;
    if (this.nSelectedRoom > this.rooms.length - 1) {
      this.nSelectedRoom = 0;
    }
  }

  previous() {
    this.pSelectedRoom--;
    if (this.pSelectedRoom < 0) {
      this.pSelectedRoom = this.rooms.length - 1;
    }

    this.mSelectedRoom--;
    if (this.mSelectedRoom < 0) {
      this.mSelectedRoom = this.rooms.length - 1;
    }

    this.nSelectedRoom--;
    if (this.nSelectedRoom < 0) {
      this.nSelectedRoom = this.rooms.length - 1;
    }
  }

}
