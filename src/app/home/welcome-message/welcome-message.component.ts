import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../shared/services/authentication/auth.service';
import { AlertService } from '../../shared/services/authentication/alert.service';
import { ModalService } from '../../shared/services/modal/modal.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html'
})
export class WelcomeMessageComponent implements OnInit {

  constructor(private authService: AuthService, private modalService: ModalService, private alertService: AlertService) { }

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

  // Einloggen
  onLogin(form: NgForm) {

  }

  // Registrieren
  onSignup(form: NgForm) {

  }

  // Confirm password
  validatePassword() {

  }


  // Wechseln zwischen den Tabs
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
