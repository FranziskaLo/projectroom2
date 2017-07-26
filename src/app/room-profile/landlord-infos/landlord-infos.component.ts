import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RoomService } from '../../shared/services/rooms/room.service';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-landlord-infos',
  templateUrl: './landlord-infos.component.html',
  styles: []
})
export class LandlordInfosComponent implements OnInit {
  room: { id: number, description: string, country: string, plz: string, location: string, hnr: string, street: string };

  constructor(private authService: AuthService, private route: ActivatedRoute, private roomService: RoomService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.room = this.roomService.getRoom(id);
  }

}
