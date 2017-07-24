import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http) {

  }

  storeUser(user: { firstName: string, lastName: string, signin_email: string, signin_password: string, confirm_password: string }) {
    // Creating a Ovservable
    return this.http.put('https://projectroom2-dcd69.firebaseio.com/user.json', user);
  }

  getUser() {
    // Return the Observable
    return this.http.get('https://projectroom2-dcd69.firebaseio.com/user.json')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;
      });
  }
}
