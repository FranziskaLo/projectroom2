import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { RoomService } from '../shared/services/rooms/room.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  citys: { city: string };
  rooms: any[] = [];
  isDataAvailable = false;

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit() {
    const city = this.route.snapshot.queryParams['city'];
    this.citys = { city };
    this.rooms = this.roomService.getRooms();
  }

  rightLocation() {
    if (this.citys.city === this.rooms[0].location) {
      return true;
    }
  }

  rightLocation2() {
    if (this.citys.city === this.rooms[1].location) {
      return true;
    }
  }

  rightLocation3() {
    if (this.citys.city === this.rooms[2].location) {
      return true;
    }
  }

  rightLocation4() {
    if (this.citys.city === this.rooms[3].location) {
      return true;
    }
  }

  rightLocation5() {
    if (this.citys.city === this.rooms[4].location) {
      return true;
    }
  }

  rightLocation6() {
    if (this.citys.city === this.rooms[5].location) {
      return true;
    }
  }
}
