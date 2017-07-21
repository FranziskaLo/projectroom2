import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../shared/auth/auth.service';
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
    let i, content, links;
    content = document.getElementsByClassName('tabcontent');
    for (i = 0; i < content.length; i++) {
      content[i].style.display = 'none';
    }
    // links = document.getElementsByClassName('tablinks');
    // for (i = 0; i < links.length; i++) {
    //   links[i].className = links[i].className.replace(' tabblue', '');
    // }
    document.getElementById(sign_tab).style.display = 'block';
    // evt.currentTarget.className += ' tabblue';
  }

  // Einloggen
  onLogin(form: NgForm) {

  }

  // Registrieren
  onSignup(form: NgForm) {

  }

  // Confirm password
  validatePassword() {

  }


}
