import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: Http) {

  }

  // Login Funktion
  login(email: string, password: string) {

  }

  // Logout Funktion
  logout() {

  }
}
