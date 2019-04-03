import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { BookingsService } from '../../bookings/bookings.service';
import { Booking } from '../../bookings/booking.model';

@Component({
  selector: 'app-new-reservation-modal',
  templateUrl: './new-reservation-modal.page.html',
  styleUrls: ['./new-reservation-modal.page.scss'],
})
export class NewReservationModalPage implements OnInit {

  restaurant = null;
  noTable = false;
  data: Booking = {
    id: null,
    restaurantId: null,
    date: null,
    time: null,
    people: null,
    table: null,
  };
  selectedTable = null;
  people = null;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private bookingService: BookingsService,
  ) { }

  ngOnInit() {
    console.log('navParams: ', this.navParams);
    this.restaurant = this.navParams.get('restaurant');
    this.data['id'] = this.bookingService.getNextId(),
    this.data['restaurantId'] = this.restaurant.id;
    this.data['date'] = new Date().toISOString();
    this.data['time'] = new Date().toISOString();
    this.data['people'] = 1;
    console.log('data: ', this.data);
  }

  book() {
    if (this.data.table === null) {
      this.noTable = true;
    } else {
      this.noTable = false;
      console.log('adding reservation for restaurant ', this.restaurant.name);
      this.data['date'] = new Date(this.data['date']).toLocaleDateString();
      this.data['time'] = new Date(this.data['time']).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
      this.bookingService.addBooking(this.data);
      this.closeModal();
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
