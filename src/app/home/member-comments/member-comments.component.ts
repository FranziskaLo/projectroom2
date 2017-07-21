import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-member-comments',
  templateUrl: './member-comments.component.html'
})
export class MemberCommentsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
