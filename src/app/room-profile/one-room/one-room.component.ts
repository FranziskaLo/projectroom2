import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-room',
  templateUrl: './one-room.component.html',
  styles: []
})
export class OneRoomComponent implements OnInit {

  constructor() { }

  // Snapchot und ActivatedRoute könnte zum Problem werden.. weil..
  // ich will ja DIREKT auf die Seite und nicht erst auf room- profile und dann die einzelnen Räume
  // Erst mal den scheiß nur mit den beiden.. werde später noch VIEL mehr brauchen.. T-T
  // Die Parameter auch im app-routing-module anpassen!
  ngOnInit() {
  }

}
