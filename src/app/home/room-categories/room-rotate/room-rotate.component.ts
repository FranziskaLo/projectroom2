import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RoomService } from '../../../shared/services/rooms/room.service';

@Component({
  selector: 'app-room-rotate',
  templateUrl: './room-rotate.component.html'
})

export class RoomRotateComponent implements OnInit {
  pSelectedRoom = 2;
  mSelectedRoom = 1;
  nSelectedRoom = 0;
  roomPrevious: boolean;
  roomNext: boolean;
  isDataAvailable = false;
  rooms: any[] = [];

  constructor(private roomService: RoomService, private router: Router) { }

  ngOnInit() {
    this.roomService.getRoomsFB()
      .subscribe(
      (data: any[]) => {
        this.rooms = data;
        console.log(data);
        this.isDataAvailable = true;
      },
      (error) => console.log(error)
      );
    // this.rooms = this.roomService.getRooms();
  }

  previous() {
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

  next() {
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

  loadPreviousRoom() {
    this.router.navigate(['/room-profile', this.rooms[this.pSelectedRoom].id]);

  }

  loadCurrentRoom() {
    this.router.navigate(['/room-profile', this.rooms[this.mSelectedRoom].id]);
  }

  loadNextRoom() {
    this.router.navigate(['/room-profile', this.rooms[this.nSelectedRoom].id]);
  }

}
