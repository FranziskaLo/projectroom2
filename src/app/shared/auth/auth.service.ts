import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


import { ModalService } from '../services/modal/modal.service';

@Injectable()
export class AuthService {
  token: string;

  constructor(private modalService: ModalService) {

  }

  // Registrierungsfunktion
  signupUser(signin_email: string, signin_password: string) {
    firebase.auth().createUserWithEmailAndPassword(signin_email, signin_password)
      .catch(
      error => console.log(error)
      );
  }

  // Login Funktion
  loginUser(login_email: string, login_password: string) {
    firebase.auth().signInWithEmailAndPassword(login_email, login_password)
      .then(
      response => {
        this.modalService.close('register');
        firebase.auth().currentUser.getToken()
          .then(
          (token: string) => this.token = token
          );
      }
      )
      .catch(
      error => console.log(error)
      );
  }

  // Logout Funktion
  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  // JSON Web Token bekommen um in requests an den Server einen Token mitschicken zu können
  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
      (token: string) => this.token = token
      );
    return this.token;
  }

  // Funktion, die feststellt, ob man authentifizeirt ist oder nicht
  isAuthenticated() {
    return this.token != null;
  }
}
