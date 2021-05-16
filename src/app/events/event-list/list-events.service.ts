import { Injectable } from '@angular/core';
import { EventIt } from 'src/app/models/event';
@Injectable({
  providedIn: 'root',
})
export class ListEventsService {
  getEvents(): EventIt[] {
    return [
      {
        id: 1,
        name: 'Angular Connect',
        code: 'ac-65',
        date: '9/26/2036',
        price: 9.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        rating: 4.2,
      },
      {
        id: 2,
        name: 'ng nl',
        code: 'ng-25',
        date: '4/15/2030',
        price: 500,
        imageUrl: '/assets/images/ng-nl.png',
        rating: 4.7,
      },
      {
        id: 3,
        name: 'Ng Vegas',
        code: 'nv 13',
        date: '05/26/2029',
        price: 400,
        imageUrl: '/assets/images/ng-vegas.png',
        rating: 3.9,
      },
      {
        id: 4,
        name: 'Ng Conf',
        code: 'cn 44',
        date: '05/26/2022',
        price: 800,
        imageUrl: '/assets/images/ng-conf.png',
        rating: 4.9,
      },
      {
        id: 5,
        name: 'Moroccan Angular Summit',
        code: 'ma 23',
        date: '05/15/2023',
        price: 300,
        imageUrl: '/assets/images/basic-shield.png',
        rating: 4.7,
      },
    ];
  }
}
