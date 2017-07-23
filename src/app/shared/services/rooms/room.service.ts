import { Injectable } from '@angular/core';

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
      ownerdescip: 'Hallo zusammen! Ich bin Max und stets auf der Suche nach tollen Orten zum Leben und Erleben – manchmal auch zum Arbeiten. Vielleicht habt ihr ja einen schicken Raum? Ich freue mich darauf, euch kennen zu lernen. Bis bald :)',
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
      ownerdescip: 'Buongiorno! Ich heiße Anna, meine Mutter ist Spanierin und mein Vater Franzose, geboren bin ich in Italien und aufgewachsen in Deutschland. Ohja, Internationalität und Vielfalt ist mir sehr wichtig – ich liebe es, fremde Länder, Sprachen und Kulturen kennenzulernen. Genauso freut es mich aber auch, in der Umgebung unbekannte, schöne Orte zu erkunden. Ein Fenster mit spektakulärem Ausblick kann beispielsweise einen ganz anderen Blick auf die Stadt geben, die man bisher zu kennen glaubte. In diesem Sinne, adios amigos!',
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
      ownerdescip: 'Hey Leute! Ich bin Fabian, Musiker, Entrepreneur und ständig unterwegs. Da kommt es schnell mal vor, dass man spontan für eine kurze Jam-Session oder eine kleine Breakout-Session noch Platz sucht. Also: Gebt mir Räume, die mich inspirieren und ich werde euch inspirieren! Ich freue mich auf Inspirationen, Erfahrungsaustausch, Bekanntschaften und Freundschaften. Euer Fabi',
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
      ownerdescip: 'Hallo Leute, habt ihr bock auf Party heute? Dann meldet euch bei mir, Nico! Ich habe einen geräumigen Partyraum mit super Soundanlage und ohne (penible) Nachbarn im Angebot. See you later alligator, euer Partyking!',
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
      owner: 'Leonie',
      ownerdescip: 'Guten Tag zusammen. Mein Name ist Helmut und ich freue mich immer, wenn Ressourcen möglichst optimal genutzt werden – sei es Strom, Rechenleistung oder eben auch Räumlichkeiten. Deshalb freue ich mich über diese Plattform, die uns die Möglichkeit bietet, letztere miteinander zu teilen und dabei auch noch neue Bekanntschaften zu schließen. Ich hoffe, möglichst viele von euch kennen lernen zu können. Liebe Grüße, Helmut',
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
      description: '',
      country: 'Deutschland',
      plz: '84359',
      hnr: '1',
      street: 'Kreuzbergerweg',
      owner: 'Helmut',
      ownerdescip: 'Hallo ihr Lieben! Ich bin Leonie und Geschäftsführerin unseres traditionsreichen Familienhotels. In diesem Zusammenhang würde ich mich sehr darüber freuen, wenn ihr bei Bedarf nach Veranstaltungsräumen (Konferenzen, Meetings, Workshops etc.) mal bei uns vorbeischaut. Ich selbst bin auch oft unterwegs und freue mich, neue, inspirierende Orte kennen zu lernen. Bis hoffentlich bald, eure Leonie',
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
}
