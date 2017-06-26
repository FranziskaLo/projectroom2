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

}
