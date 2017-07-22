import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-room-comments',
  templateUrl: './room-comments.component.html',
  styles: []
})
export class RoomCommentsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
