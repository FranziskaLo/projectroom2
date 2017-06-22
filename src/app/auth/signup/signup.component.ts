import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

import { ModalService } from '../../shared/services/modal/modal.service';


@Component({
  moduleId: module.id.toString(),
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  private bodyText: string;

  constructor(private authService: AuthService, private modalService: ModalService) { }

  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
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
