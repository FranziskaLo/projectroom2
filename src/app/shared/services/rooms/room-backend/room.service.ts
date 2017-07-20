import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Room } from './room';

@Injectable()
export class RoomService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private roomsUrl = 'api/rooms';  // URL to web api; "rooms" = const rooms in in-memory-data-service.ts

  constructor(private http: Http) { }

  getRooms(): Promise<Room[]> {
    return this.http.get(this.roomsUrl)
      .toPromise()
      .then(response => response.json().data as Room[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
