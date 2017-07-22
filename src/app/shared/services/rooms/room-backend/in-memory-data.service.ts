import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rooms = [
      {
        id: 1,
        name: 'meine Küche für einen gemeinsamen Kochabend',
        href: 'http://orientalresidence.azureedge.net/images/thumb-meeting-boardroom.jpg',
        roompic: 'https://c1.staticflickr.com/4/3857/14248796927_0174498936_b.jpg',
        location: 'Mannheim',
        price: '5,25'
      },
      {
        id: 2,
        name: 'cooler Raum zum Relaxen',
        href: 'https://officesnapshots.com/wp-content/uploads/2015/12/small-meeting.jpg',
        roompic: 'https://static.pexels.com/photos/269141/pexels-photo-269141.jpeg',
        location: 'Hamburg',
        price: '4,00'
      },
      {
        id: 3,
        name: 'Klavier-Raum',
        href: 'http://www.escalantebnb.com/images/room3med.jpg',
        roompic: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Yamaha_C7_Concert_Grand_Piano_at_Audio_Mix_House%2C_Studio_A.jpg',
        location: 'Frankfurt',
        price: '10,50'
      },
      {
        id: 4,
        name: 'neu rennovierter Party-Raum',
        href: 'http://kolkatainterior.in/images/living-room-interior/living-room-interior-project.jpg',
        roompic: 'https://c1.staticflickr.com/4/3638/3625730119_aed502426d_b.jpg',
        location: 'Salzburg',
        price: '13,30'
      },
      {
        id: 5,
        name: 'Büroraum mit ruhiger Lage',
        href: 'https://images.pexels.com/photos/77931/pexels-photo-77931.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
        roompic: 'https://pixnio.com/free-images/2017/03/31/2017-03-31-08-40-28-725x482.jpg',
        location: 'Simbach',
        price: '4,50'
      }
    ];
    return { rooms };
  }
}
