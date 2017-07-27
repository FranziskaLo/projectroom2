import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RoomService {
  private rooms = [
    {
      id: 1,
      name: 'meine Küche für einen gemeinsamen Kochabend',
      roompic: '../../../../assets/kitchen.jpg',
      price: '5,25',
      description: 'Hey kommt vorbei und kocht gemeinsam in meiner kleinen Küche. Meine Küche ist groß, hat alles, was man typischerweise so benötigt und steht euch gerne zu euren Diensten! Ich freu mich auf euch :)',
      country: 'Deutschland',
      plz: '68165',
      location: 'Mannheim',
      hnr: '32',
      street: 'Emanuel-Kant-Straße',
      owner: 'Max',
      ownerdescription: 'Hallo zusammen! Ich bin Max und stets auf der Suche nach tollen Orten zum Leben und Erleben – manchmal auch zum Arbeiten. Vielleicht habt ihr ja einen schicken Raum? Ich freue mich darauf, euch kennen zu lernen. Bis bald :)',
      userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWraF2xxwMum8Y-B78VVvOcA-1zvChUtVvJSL-dF7NSUnWKbb0A',
      age: '22 Jahre',
      usersince: '07.07.2017',
      reliability: '100%',
      totalrooms: '3',
      phone: '+49 699 53941760',
      email: 'm.mustermann@hotmail.com',
      roomdescription_rating: '4.2',
      arrangement_rating: '5.0',
      conditions_rating: '5.0'
    },
    {
      id: 2,
      name: 'cooler Raum zum Relaxen',
      roompic: '../../../../assets/relax.jpg',
      price: '4,00',
      description: 'Hallo meine lieben Leute der großen weiten Welt! Ihr seid total erschöpft und auch zu Hause kommt ihr aus diversen Gründen einfach nicht zur Ruhe? Dann seid ihr hier genau richtig :)!! Hiermit steht euch ein Raum mit angenehmer Atmosphäre zur Verfügung, der euch sicherlich viel Entspannung einbringt!',
      country: 'Deutschland',
      plz: '22113',
      location: 'Hamburg',
      hnr: '2',
      street: 'Liebigstraße',
      owner: 'Anna',
      ownerdescription: 'Buongiorno! Ich heiße Anna, meine Mutter ist Spanierin und mein Vater Franzose, geboren bin ich in Italien und aufgewachsen in Deutschland. Ohja, Internationalität und Vielfalt ist mir sehr wichtig – ich liebe es, fremde Länder, Sprachen und Kulturen kennenzulernen. Genauso freut es mich aber auch, in der Umgebung unbekannte, schöne Orte zu erkunden. Ein Fenster mit spektakulärem Ausblick kann beispielsweise einen ganz anderen Blick auf die Stadt geben, die man bisher zu kennen glaubte. In diesem Sinne, adios amigos!',
      userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJVULm_xl-BrG5nMY3hxi5xS9p5eINZYYC6sIwaJcKtoq68221w',
      age: '27 Jahre',
      usersince: '17.04.2017',
      reliability: '100%',
      totalrooms: '1',
      phone: '+49 152 11111111',
      email: 'anna_amsel@gmx.de',
      roomdescription_rating: '4.7',
      arrangement_rating: '5.0',
      conditions_rating: '5.0'
    },
    {
      id: 3,
      name: 'Klavier-Raum',
      roompic: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Yamaha_C7_Concert_Grand_Piano_at_Audio_Mix_House%2C_Studio_A.jpg',
      location: 'Frankfurt',
      price: '10,50',
      description: 'Hallo! Ich stelle euch hiermit meinen schalldichten Klavier- bzw. Flügelraum bereit, der bisher nur von mir und auch nicht allzu oft benutzt wurde! Wenn ihr auch Klavier-begeistert seid, spielen möchtet, aber keines selber zu Hause habt, dann kommt doch gerne hier her (mit oder ohne euren Freunden) und spielt ein paar Stündchen!',
      country: 'Deutschland',
      plz: '60313',
      hnr: '10',
      street: 'Zeil',
      owner: 'Fabian',
      ownerdescription: 'Hey Leute! Ich bin Fabian, Musiker, Entrepreneur und ständig unterwegs. Da kommt es schnell mal vor, dass man spontan für eine kurze Jam-Session oder eine kleine Breakout-Session noch Platz sucht. Also: Gebt mir Räume, die mich inspirieren und ich werde euch inspirieren! Ich freue mich auf Inspirationen, Erfahrungsaustausch, Bekanntschaften und Freundschaften. Euer Fabi',
      userpic: 'https://thumbs.dreamstime.com/t/singer-playing-guitar-outdoors-sitting-suitcase-43784364.jpg',
      age: '31 Jahre',
      usersince: '05.06.2017',
      reliability: '100%',
      totalrooms: '5',
      phone: '+49 173 123456789',
      email: 'f.holzi123@gmail.com',
      roomdescription_rating: '5.0',
      arrangement_rating: '5.0',
      conditions_rating: '5.0'
    },
    {
      id: 4,
      name: 'neu rennovierter Party-Raum',
      roompic: '../../../../assets/party.jpg',
      location: 'München',
      price: '13,30',
      description: 'Neu rennovierter PARTY-RAUM!!! Ihr wolltet schon lange mal mit euren Freunden in den - mehr oder weinger- eigenen vier Wänden eine Party steigen lassen, aber hattet bisher nicht den nötigen Platz oder die richtige Lage (Nachbarn und so weiter..) dazu? Dann nutzt doch gerne diesen Raum hier! Er ist ausgelegt für 20 - 30 Leute, stellt einen Kühlschrank, eine Tiefkühltruhe und viele Steh- und Sitzplätze für euch bereit!',
      country: 'Deutschland',
      plz: '80331',
      hnr: 'Hauptstraße',
      street: '18',
      owner: 'Nico',
      ownerdescription: 'Hallo Leute, habt ihr bock auf Party heute? Dann meldet euch bei mir, Nico! Ich habe einen geräumigen Partyraum mit super Soundanlage und ohne (penible) Nachbarn im Angebot. See you later alligator, euer Partyking!',
      userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LC4BCmgz_buL9jXY3EUjOR3pSDwnzZM_5ts5Llk5SOJUJvdIuw',
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
      roompic: '../../../../assets/office.jpg',
      location: 'Simbach',
      price: '4,50',
      description: 'Hallo. Dieser Büroraum ist für Leute, die aus Gründen spontan einen geeigneten Arbeitsplatz mit viel Ruhe benötigen, ausgelegt (sei es wegen plötzlichen Baustellenlärm, kein vorhandenes Heim-Büro oder aus welchen Gründen auch immer).',
      country: 'Deutschland',
      plz: '60313',
      hnr: '6',
      street: 'Thorwaldsenplatz',
      owner: 'Helmut',
      ownerdescription: 'Guten Tag zusammen. Mein Name ist Helmut und ich freue mich immer, wenn Ressourcen möglichst optimal genutzt werden – sei es Strom, Rechenleistung oder eben auch Räumlichkeiten. Deshalb freue ich mich über diese Plattform, die uns die Möglichkeit bietet, letztere miteinander zu teilen und dabei auch noch neue Bekanntschaften zu schließen. Ich hoffe, möglichst viele von euch kennen lernen zu können. Liebe Grüße, Helmut',
      userpic: 'data:image/jpeg;base64,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',
      age: '29 Jahre',
      usersince: '03.07.2017',
      reliability: '99%',
      totalrooms: '4',
      phone: '+49 660 3796219',
      email: 'heli.b567@gmx.de',
      roomdescription_rating: '4.5',
      arrangement_rating: '4.9',
      conditions_rating: '4.8'
    },
    {
      id: 6,
      name: 'heller Meetingraum im Hotel Adels',
      roompic: '../../../../assets/meetingroom.jpg',
      location: 'Frankfurt',
      price: '8,50',
      description: 'In den minimalistisch, aber stilvoll eingerichteten Meeting-Räumen des Hotel Adels ist Platz für Vorträge, Workshops, Think Tanks u.v.m. Wir reduzieren die Deko auf ein Minimum, damit Ihr Platz habt, Euch zu entfalten! Im Rahmen unseres allgemeinen „Rundum-Sorglos“-Konzeptes stellen wir Euch Beamer, Rechner mit gewünschtem Betriebssystem, Whiteboard, Flipchart und Präsentionskoffer zur Verfügung, sodass Ihr Euch auf das Wesentliche fokussieren könnt. Im Grunde genommen haben wir für jede Personengröße bis 400 den idealen Raum – sprecht uns an, kommt vorbei und lasst Euch überzeugen! Nice to know: Bei Bedarf übernimmt unser hoteleigenes Restaurant gerne Eure Verpflegung -> einfach einen Kommentar in die Buchung schreiben, dann kann alles weitere telefonisch besprochen werden. Durch den 24h Check- In ist stets jemand an der Rezeption, sodass ihr den Raum wirklich zu jeder Tages- und Nachtzeit buchen könnt.',
      country: 'Deutschland',
      plz: '84359',
      hnr: '1',
      street: 'Kreuzbergerweg',
      owner: 'Leonie',
      ownerdescription: 'Hallo ihr Lieben! Ich bin Leonie und Geschäftsführerin unseres traditionsreichen Familienhotels. In diesem Zusammenhang würde ich mich sehr darüber freuen, wenn ihr bei Bedarf nach Veranstaltungsräumen (Konferenzen, Meetings, Workshops etc.) mal bei uns vorbeischaut. Ich selbst bin auch oft unterwegs und freue mich, neue, inspirierende Orte kennen zu lernen. Bis hoffentlich bald, eure Leonie',
      userpic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaL1vGbbFJCHeLjzE_fbJtvLjHGVJWaC0KKFdmEA4Qz60vWjsQ5Q',
      age: '29 Jahre',
      usersince: '11.07.2017',
      reliability: '100%',
      totalrooms: '2',
      phone: '+49 1660 3796219',
      email: 'leonie.adels@t-online.de',
      roomdescription_rating: '5.0',
      arrangement_rating: '5.0',
      conditions_rating: '5.0'
    }
  ];

  constructor(private http: Http) { }

  getRooms() {
    return this.rooms;
  }

  getRoom(id: number) {
    const room = this.rooms.find(
      (s) => {
        return s.id === id;
      }
    );
    return room;
  }

  // Angefangen die Räume aus der Datenbank zu holen anstatt das oben aufgeführte Array zu nutzen
  getRoomsFB() {
    // Return the Observable
    return this.http.get('https://projectroom2-dcd69.firebaseio.com/rooms.json')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;
      });
  }
}
