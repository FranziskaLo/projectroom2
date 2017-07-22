import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rooms = [
      {
        id: 1,
        name: 'meine Küche mit rotem Fahrrad',
        href: 'http://orientalresidence.azureedge.net/images/thumb-meeting-boardroom.jpg',
        location: 'Mannheim',
        price: '5,25'
      },
      {
        id: 2,
        name: 'cooler Raum zum Relaxen',
        href: 'https://officesnapshots.com/wp-content/uploads/2015/12/small-meeting.jpg',
        location: 'Hamburg',
        price: '4,00'
      },
      {
        id: 3,
        name: 'Klavier-Raum',
        href: 'http://www.escalantebnb.com/images/room3med.jpg',
        location: 'Frankfurt',
        price: '10,50'
      },
      {
        id: 4,
        name: 'neu rennovierter Party-Raum',
        href: 'http://kolkatainterior.in/images/living-room-interior/living-room-interior-project.jpg',
        location: 'Salzburg',
        price: '13,30'
      },
      {
        id: 5,
        name: 'Büroraum mit ruhiger Lage',
        href: 'https://images.pexels.com/photos/77931/pexels-photo-77931.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
        location: 'Simbach',
        price: '4,50'
      }
    ];
    return { rooms };
  }
}
