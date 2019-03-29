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
      name: 'Restaurante Prueba 3',
      imageUrl: 'http://quieroarepas.com/wp-content/uploads/2014/01/quiero_arepas_logo.png',
    }, {
      id: '00004',
      name: 'Restaurante Prueba 4',
      imageUrl: 'http://quieroarepas.com/wp-content/uploads/2014/01/quiero_arepas_logo.png',
    }, {
      id: '00005',
      name: 'Restaurante Prueba 5',
      imageUrl: 'http://quieroarepas.com/wp-content/uploads/2014/01/quiero_arepas_logo.png',
    }, {
      id: '00006',
      name: 'Restaurante Prueba 6',
      imageUrl: 'http://quieroarepas.com/wp-content/uploads/2014/01/quiero_arepas_logo.png',
    }, {
      id: '00007',
      name: 'Restaurante Prueba 7',
      imageUrl: 'http://quieroarepas.com/wp-content/uploads/2014/01/quiero_arepas_logo.png',
    }, {
      id: '00008',
      name: 'Restaurante Prueba 8',
      imageUrl: 'http://quieroarepas.com/wp-content/uploads/2014/01/quiero_arepas_logo.png',
    }
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
