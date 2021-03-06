import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomService } from '../../shared/services/rooms/room.service';

@Component({
  selector: 'app-room-header',
  templateUrl: './room-header.component.html',
  styles: []
})
export class RoomHeaderComponent implements OnInit {
  room: { id: number };

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.room = this.roomService.getRoom(id);
  }
}
