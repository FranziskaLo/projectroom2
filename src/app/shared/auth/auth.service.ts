import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token: string;

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
      response => {
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

  // JSON Web Token bekommen um in requests an den Server einen Token mitschicken zu können
  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
      (token: string) => this.token = token
      );
    return this.token;
  }

  // Sollte ich also mal in irgendeinem Service auf die DB zugreifen wollen mit get, post oder whatever...
  // IMMER DAS ZUERST AUFRUFEN:
  //// const token = this.authService.getToken();
  // Wichtig ist dann auch '?auth=' hinter jeder .json mit dem Token, Beispiel:
  //// this.http.get('https://projectroom2-dcd69.firebaseio.com/roomsData.json?auth=' + token)


  // Funktion, die feststellt, ob man authentifizeirt ist oder nicht
  isAuthenticated() {
    return this.token != null;
  }
}
