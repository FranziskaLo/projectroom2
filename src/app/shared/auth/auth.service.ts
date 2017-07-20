import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  constructor() {

  }

  // Registrierungsfunktion
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
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
