import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() {

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
      response => console.log(response)
      )
      .catch(
      error => console.log(error)
      );
  }

  // Logout Funktion
  logout() {

  }
}
