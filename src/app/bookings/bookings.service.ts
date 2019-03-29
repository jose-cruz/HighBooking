import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private bookings: Booking[] = [
    {
      id: '00001',
      date: '31/03/2019',
      time: '16:00',
      restaurantId: '00001',
    },
    {
      id: '00002',
      date: '07/04/2019',
      time: '19:00',
      restaurantId: '00002',
    },
    {
      id: '00003',
      date: '12/04/2019',
      time: '20:00',
      restaurantId: '00001',
    },
    {
      id: '00004',
      date: '24/04/2019',
      time: '10:00',
      restaurantId: '00002',
    },
  ];

  constructor() { }

  getAllBookings() {
    return [...this.bookings];
  }

  deleteBooking(bookingId: string) {
    let deletedBooking: Booking;
    deletedBooking = this.bookings.find(booking => {
      return booking.id === bookingId;
    });
    this.bookings = this.bookings.filter(booking => {
      return booking.id !== bookingId;
    });
    if (deletedBooking) {
      return true;
    } else {
      return false;
    }
  }

  addBooking(newBooking: Booking) {
    this.bookings.push(newBooking);
    return true;
  }

}
