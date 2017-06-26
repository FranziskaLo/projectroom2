import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../auth/auth.service';
import { ModalService } from '../../shared/services/modal/modal.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html'
})
export class WelcomeMessageComponent implements OnInit {

  constructor(private authService: AuthService, private modalService: ModalService) { }

  ngOnInit() {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onSignup(form: NgForm) {
    // const email = form.value.email;
    // const password = form.value.password;
    // this.authService.signupUser(email, password);
  }

  openTab(evt, sign_tab) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(sign_tab).style.display = 'block';
    evt.currentTarget.className += ' active';
  }


}
