import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalService } from '../services/modal/modal.service';
import { AuthService } from './auth.service';
import { UserService } from '../services/users/user.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  @ViewChild('f2') signupForm: NgForm;
  @ViewChild('f1') loginForm: NgForm;
  userName = '';
  user: any[] = [];

  constructor(private modalService: ModalService, private authService: AuthService, private userService: UserService) { }

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
    let i, content;
    content = document.getElementsByClassName('tabcontent');
    for (i = 0; i < content.length; i++) {
      content[i].style.display = 'none';
    }
    document.getElementById(sign_tab).style.display = 'block';
  }


  // Registrierungsfunktion verbunden mit AuthService
  onSignup(form: NgForm) {
    const firstName = form.value.firstName;
    const lastName = form.value.lastName;
    const bday = form.value.bday;
    const signin_email = form.value.signin_email;
    const signin_password = form.value.signin_password;
    const confirm_password = form.value.confirm_password;
    this.authService.signupUser(signin_email, signin_password);
    this.userService.storeUser({ firstName, lastName, signin_email, signin_password, confirm_password })
      .subscribe(
      (error) => console.log(error)
      );
    this.userService.getUser()
      .subscribe(
      (data: any[]) => {
        this.user = data;
      },
      (error) => console.log(error)
      );
    this.signupForm.reset();
  }

  // Login Funktion verbunden mit AuthService
  onLogin(form: NgForm) {
    const login_email = form.value.login_email;
    const login_password = form.value.login_password;
    this.userService.getUser()
      .subscribe(
      (data: any[]) => {
        this.user = data;
      },
      (error) => console.log(error)
      );
    this.authService.loginUser(login_email, login_password);
    this.loginForm.reset();
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
