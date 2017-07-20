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
  login(email: string, password: string) {

  }

  // Logout Funktion
  logout() {

  }
}
