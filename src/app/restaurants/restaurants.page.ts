import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantsService } from './restaurants.service';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../home/user.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {
  restaurants: Restaurant[];

  constructor(
    private restaurantService: RestaurantsService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.restaurants = this.restaurantService.getAllRestaurants();
  }

}
