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
  private rooms: any[] = [];

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit() {
    const city = this.route.snapshot.queryParams['city'];
    this.citys = { city };
    this.rooms = this.roomService.getRooms();
  }
}
