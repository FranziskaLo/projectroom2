import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-header',
  templateUrl: './room-header.component.html',
  styles: []
})
export class RoomHeaderComponent implements OnInit {
  room: { id: number, name: string, roompic: string };
  private rooms: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.room = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      roompic: this.route.snapshot.params['roompic']
    };
  }
}
