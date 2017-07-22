import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-landlord-infos',
  templateUrl: './landlord-infos.component.html',
  styles: []
})
export class LandlordInfosComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
