import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-header',
  templateUrl: './room-header.component.html',
  styles: []
})
export class RoomHeaderComponent implements OnInit {
  room: { id: number };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.room = {
      id: this.route.snapshot.params['id']
    };
  }
}
