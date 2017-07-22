import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Room } from './room';

@Injectable()
export class RoomService {
  private rooms = [
    {
      id: 1,
      name: 'meine Küche für einen gemeinsamen Kochabend',
      href: 'http://orientalresidence.azureedge.net/images/thumb-meeting-boardroom.jpg',
      roompic: 'https://c1.staticflickr.com/4/3857/14248796927_0174498936_b.jpg',
      price: '5,25',
      description: 'Hey kommt vorbei und kocht gemeinsam in meiner kleinen Küche. Meine Küche ist groß, hat alles, was man typischerweise so benötigt und steht euch gerne zu euren Diensten! Ich freu mich auf euch :)',
      country: 'Deutschland',
      plz: '68165',
      location: 'Mannheim',
      hnr: '32',
      street: 'Emanuel-Kant-Straße',
      owner: 'Max',
      ownerdescip: 'Hallo alle zusammen! Ich bin Max und ich bin stehts auf der Suche nach tollen Orten zum Leben und Erleben. Vielleicht habt ihr ja einen schicken Raum? Ich freu mich darauf euch kennen zu lernen. Schaut auch gerne mal bei mir vorbei. Bis bald :)',
      age: '22 Jahre',
      usersince: '07.07.2017',
      reliability: '100%',
      totalrooms: '3',
      phone: '+43 699 53941760',
      email: 'm.mustermann@hotmail.com',
      roomdescription_rating: '4.2',
      arrangement_rating: '5.0',
      conditions_rating: '5.0'
    },
    {
      id: 2,
      name: 'cooler Raum zum Relaxen',
      href: 'https://officesnapshots.com/wp-content/uploads/2015/12/small-meeting.jpg',
      roompic: 'https://static.pexels.com/photos/269141/pexels-photo-269141.jpeg',
      price: '4,00',
      description: 'Hallo meine lieben Leute der großen weiten Welt! Ihr seid total erschöpft und auch zu Hause kommt ihr aus diversen Gründen einfach nicht zur Ruhe? Dann seid ihr hier genau richtig :)!! Hiermit steht euch ein Raum mit angenehmer Atmosphäre zur Verfügung, der euch sicherlich viel Entspannung einbringt!',
      country: 'Deutschland',
      plz: '22113',
      location: 'Hamburg',
      hnr: '2',
      street: 'Liebigstraße',
      owner: 'Lara',
      ownerdescip: '',
      age: '27 Jahre',
      usersince: '17.04.2017',
      reliability: '100%',
      totalrooms: '1',
      phone: '+49 152 11111111',
      email: 'lara.l@googlemail.com',
      roomdescription_rating: '4.7',
      arrangement_rating: '5.0',
      conditions_rating: '5.0'
    },
    {
      id: 3,
      name: 'Klavier-Raum',
      href: 'http://www.escalantebnb.com/images/room3med.jpg',
      roompic: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Yamaha_C7_Concert_Grand_Piano_at_Audio_Mix_House%2C_Studio_A.jpg',
      location: 'Frankfurt',
      price: '10,50',
      description: 'Hallo! Ich stelle euch hiermit meinen schalldichten Klavier- bzw. Flügelraum bereit, der bisher nur von mir und auch nicht allzu oft benutzt wurde! Wenn ihr auch Klavier-begeistert seid, spielen möchtet, aber keines selber zu Hause habt, dann kommt doch gerne hier her (mit oder ohne euren Freunden) und spielt ein paar Stündchen!',
      country: 'Deutschland',
      plz: '60313',
      hnr: '10',
      street: 'Zeil',
      owner: 'Anna',
      ownerdescip: '',
      age: '31 Jahre',
      usersince: '05.06.2017',
      reliability: '100%',
      totalrooms: '5',
      phone: '+49173 123456789',
      email: 'anna_amsel@gmx.de',
      roomdescription_rating: '5.0',
      arrangement_rating: '5.0',
      conditions_rating: '5.0'
    },
    {
      id: 4,
      name: 'neu rennovierter Party-Raum',
      href: 'http://kolkatainterior.in/images/living-room-interior/living-room-interior-project.jpg',
      roompic: 'https://c1.staticflickr.com/4/3638/3625730119_aed502426d_b.jpg',
      location: 'München',
      price: '13,30',
      description: 'Neu rennovierter PARTY-RAUM!!! Ihr wolltet schon lange mal mit euren Freunden in den - mehr oder weinger- eigenen vier Wänden eine Party steigen lassen, aber hattet bisher nicht den nötigen Platz oder die richtige Lage (Nachbarn und so weiter..) dazu? Dann nutzt doch gerne diesen Raum hier! Er ist ausgelegt für 20 - 30 Leute, stellt einen Kühlschrank, eine Tiefkühltruhe und viele Steh- und Sitzplätze für euch bereit!',
      country: 'Deutschland',
      plz: '80331',
      hnr: 'Hauptstraße',
      street: '18',
      owner: 'Nico',
      ownerdescip: '',
      age: '21 Jahre',
      usersince: '14.06.2017',
      reliability: '95%',
      totalrooms: '9',
      phone: '+49 176 931650777',
      email: 'nico.huber@gmx.de',
      roomdescription_rating: '4.0',
      arrangement_rating: '4.6',
      conditions_rating: '5.0'
    },
    {
      id: 5,
      name: 'Büroraum mit ruhiger Lage',
      href: 'https://images.pexels.com/photos/77931/pexels-photo-77931.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
      roompic: 'https://pixnio.com/free-images/2017/03/31/2017-03-31-08-40-28-725x482.jpg',
      location: 'Simbach',
      price: '4,50',
      description: 'Hallo. Dieser Büroraum ist für Leute, die aus Gründen spontan einen geeigneten Arbeitsplatz mit viel Ruhe benötigen, ausgelegt (sei es wegen plötzlichen Baustellenlärm, kein vorhandenes Heim-Büro oder aus welchen Gründen auch immer).',
      country: 'Deutschland',
      plz: '84359',
      hnr: '1',
      street: 'Kreuzbergerweg',
      owner: 'Helmut',
      ownerdescip: '',
      age: '29 Jahre',
      usersince: '03.07.2017',
      reliability: '99%',
      totalrooms: '4',
      phone: '+49 660 3796219',
      email: 'heli.b567@gmx.de',
      roomdescription_rating: '4.5',
      arrangement_rating: '4.9',
      conditions_rating: '4.8'
    }
  ];

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

  getRoom2(id: number) {
    const room = this.rooms.find(
      (s) => {
        return s.id === id;
      }
    );
    return room;
  }
}
