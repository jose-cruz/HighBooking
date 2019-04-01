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
      imageUrl: 'http://quieroarepas.com/wp-content/uploads/2014/01/quiero_arepas_logo.png',
    }, {
      id: '00003',
      name: 'Sushi Ronin',
      imageUrl: 'http://www.sushironindenver.com/wp-content/uploads/2017/12/sushi-ronin-logo.png',
    }, {
      id: '00004',
      name: 'Cart-Driver',
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiGo6WEq6vhAhUDRqwKHQErDQUQjRx6BAgBEAU&url=http%3A%2F%2Fwww.3squarellc.com%2Fportfolio%2Fcart-driver%2F&psig=AOvVaw2_t7PvcUssYmqi5uLFAi7z&ust=1554085834509368',
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
