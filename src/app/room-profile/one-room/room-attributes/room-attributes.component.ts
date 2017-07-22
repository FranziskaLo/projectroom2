import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-attributes',
  templateUrl: './room-attributes.component.html',
  styles: []
})
export class RoomAttributesComponent implements OnInit {
  room: { description: string, country: string, plz: string, location: string, hnr: string, street: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.room = {
      description: this.route.snapshot.params['description'],
      country: this.route.snapshot.params['country'],
      plz: this.route.snapshot.params['plz'],
      location: this.route.snapshot.params['location'],
      hnr: this.route.snapshot.params['hnr'],
      street: this.route.snapshot.params['street']
    };
  }

}
