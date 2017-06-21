import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rooms = [
      {
        href: 'http://orientalresidence.azureedge.net/images/thumb-meeting-boardroom.jpg',
        id: 1,
        location: 'Ort 1',
        name: 'Testraum 1',
        price: '700,50'
      },
      {
        href: 'https://officesnapshots.com/wp-content/uploads/2015/12/small-meeting.jpg',
        id: 2,
        location: 'Ort 2',
        name: 'Testraum 2',
        price: '8,50'
      },
      {
        href: 'http://www.escalantebnb.com/images/room3med.jpg',
        id: 3,
        location: 'Ort 3',
        name: 'Testraum 3',
        price: '7,00'
      },
      {
        href: 'http://kolkatainterior.in/images/living-room-interior/living-room-interior-project.jpg',
        id: 4,
        location: 'Ort 4',
        name: 'Testraum 4',
        price: '8,00'
      },
      {
        href: 'https://images.pexels.com/photos/77931/pexels-photo-77931.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
        id: 5,
        location: 'Ort 5',
        name: 'Testraum 5',
        price: '9,50'
      }
    ];
    return { rooms };
  }
}
