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


  // getRoom(id: number): Promise<Room> {
  //   const url = `${this.roomsUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as Room)
  //     .catch(this.handleError);
  // }

  // delete(id: number): Promise<void> {
  //   const url = `${this.roomsUrl}/${id}`;
  //   return this.http.delete(url, { headers: this.headers })
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  // create(name: string): Promise<Room> {
  //   return this.http
  //     .post(this.roomsUrl, JSON.stringify({ name: name }), { headers: this.headers })
  //     .toPromise()
  //     .then(res => res.json().data as Room)
  //     .catch(this.handleError);
  // }

  // update(room: Room): Promise<Room> {
  //   const url = `${this.roomsUrl}/${room.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(room), { headers: this.headers })
  //     .toPromise()
  //     .then(() => room)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
