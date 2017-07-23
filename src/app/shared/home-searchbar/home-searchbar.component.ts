import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-searchbar',
  templateUrl: './home-searchbar.component.html'
})
export class HomeSearchbarComponent implements OnInit {
  searchForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      'search': new FormControl(null)
    });
  }
}
