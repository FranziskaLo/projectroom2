import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBklrl3bukVnulW4Xlbv3bhjQ07zzO0wWs',
      authDomain: 'projectroom2-dcd69.firebaseapp.com'
    });
  }
}
