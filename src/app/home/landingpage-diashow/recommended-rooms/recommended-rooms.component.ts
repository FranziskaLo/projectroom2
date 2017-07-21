import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-recommended-rooms',
  templateUrl: './recommended-rooms.component.html'
})
export class RecommendedRoomsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
