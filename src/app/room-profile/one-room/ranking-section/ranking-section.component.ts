import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomService } from '../../../shared/services/rooms/room.service';

@Component({
  selector: 'app-ranking-section',
  templateUrl: './ranking-section.component.html',
  styles: []
})
export class RankingSectionComponent implements OnInit {
  room: { id: number, description: string, country: string, plz: string, location: string, hnr: string, street: string };

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.room = this.roomService.getRoom2(id);
  }

}
