import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ModalService } from '../shared/services/modal/modal.service';
import { AuthService } from '../shared/auth/auth.service';
import { UserService } from '../shared/services/users/user.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  user: any[] = [];
  searchForm: FormGroup;
  windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

  constructor(private modalService: ModalService, private authService: AuthService, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.userService.getUser()
      .subscribe(
      (data: any[]) => {
        this.user = data;
      },
      (error) => console.log(error)
      );
    this.searchForm = new FormGroup({
      'search': new FormControl(null)
    });
  }

  // Öffnen des Pop-ups
  openModal(id: string) {
    this.modalService.open(id);
  }

  // Schließen des Pop-ups
  closeModal(id: string) {
    this.modalService.close(id);
  }

  // Wechseln zwischen den Tabs
  openTab(evt, sign_tab) {
    let i, content;
    content = document.getElementsByClassName('tabcontent');
    for (i = 0; i < content.length; i++) {
      content[i].style.display = 'none';
    }
    document.getElementById(sign_tab).style.display = 'block';
  }

  // Logout Funktion
  onLogout() {
    this.authService.logout();
  }

  isLandingPage() {
    if (this.router.url === '/home') {
      return true;
    }
  }

  isSmallSize() {
    if (this.windowWidth < 768) {
      return true;
    }
  }

}
