import { Injectable } from '@angular/core';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  private restaurants: Restaurant[] = [
    {
      id: '00001',
      name: 'Maria Empanada',
      imageUrl: 'http://mariaempanada.com/wp-content/uploads/2016/11/me-logo.png',
    }, {
      id: '00002',
      name: 'Quiero Arepas',
      imageUrl: 'https://pbs.twimg.com/profile_images/974989624228560902/66eEl85D.png',
    }, {
      id: '00003',
      name: 'Sushi Ronin',
      imageUrl: 'http://www.sushironindenver.com/wp-content/uploads/2017/12/sushi-ronin-logo.png',
    }, {
      id: '00004',
      name: 'Hop Alley',
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://static1.squarespace.com/static/559b4924e4b0e8559d2b7a1b/t/5666324969492e8e1cd78c08/1449538193280/Hop+Alley+Chinese+Food%2C+Denver',
    },
    ];

  constructor() { }

  getAllRestaurants() {
    return[...this.restaurants];
  }

  getRestaurant(restaurantId: string) {
    return {
      ...this.restaurants.find(restaurant => {
      return restaurant.id === restaurantId;
    })};
  }

}
