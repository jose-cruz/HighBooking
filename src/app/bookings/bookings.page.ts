import { Component, OnInit } from '@angular/core';
import { BookingsService } from './bookings.service';
import { Booking } from './booking.model';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { Router } from '../../../node_modules/@angular/router';
import { UserService } from '../home/user.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  bookings: Booking[];
  auth = this.userService.getUserAuth();

  constructor(
    private bookingService: BookingsService,
    private restaurantService: RestaurantsService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

    if (!this.auth) {
      this.router.navigateByUrl('/login');
    } else {
      this.bookings = this.bookingService.getAllBookings();
      for (let i = 0; i < this.bookings.length; i++) {
        this.bookings[i]['restaurant'] = this.getBookingRestaurant(this.bookings[i].restaurantId);
      }
    }

  }

  getBookingRestaurant(restaurantId) {
    return this.restaurantService.getRestaurant(restaurantId);
  }

}
