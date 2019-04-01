import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  private nextBookingId = '00005';
  private bookings: Booking[] = [
    {
      id: '00001',
      restaurantId: '00001',
      date: '31/03/2019',
      time: '4:00 pm',
      people: 4,
      table: 'table1',
    },
    {
      id: '00003',
      restaurantId: '00003',
      date: '07/04/2019',
      time: '07:00 pm',
      people: 2,
      table: 'table7',
    },
    {
      id: '00002',
      restaurantId: '00001',
      date: '12/04/2019',
      time: '08:00 pm',
      people: 2,
      table: 'table2',
    },
    {
      id: '00004',
      restaurantId: '00002',
      date: '24/04/2019',
      time: '10:00 am',
      people: 4,
      table: 'table5',
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
    // this.bookings.push(newBooking);
    const tempNextId = Number(this.nextBookingId) + 1;
    this.nextBookingId = tempNextId.toString();
    while (this.nextBookingId.length < 5) {
      this.nextBookingId = '0' + this.nextBookingId;
    }
    return true;
  }

  getNextId() {
    return this.nextBookingId;
  }

}
