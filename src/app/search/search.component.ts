import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  citys: { city: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    // this.citys = this.route.snapshot.queryParams['city'];
    const city = this.route.snapshot.queryParams['city'];
    this.citys = { city };
    // this.room = this.roomService.getRoom(id);
  }
}
