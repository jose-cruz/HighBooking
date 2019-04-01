import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from '../restaurants.service';
import { Restaurant } from '../restaurant.model';
import { ModalController } from '../../../../node_modules/@ionic/angular';
import { NewReservationModalPage } from '../../pages/new-reservation-modal/new-reservation-modal.page';
import { UserService } from '../../home/user.service';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.page.html',
  styleUrls: ['./restaurant-view.page.scss'],
})
export class RestaurantViewPage implements OnInit {

  selectedRestaurant: Restaurant;
  auth = this.userService.getUserAuth();

  constructor(
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private restaurantService: RestaurantsService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => {
    //   this.value = params.id; // --> Name must match wanted parameter
    // });
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('restaurantId')) {
        // redirect to
        return;
      }

      const restaurantId = paramMap.get('restaurantId');
      this.selectedRestaurant = this.restaurantService.getRestaurant(restaurantId);
      console.log(this.selectedRestaurant);
    });
  }

  async newRes() {
    this.auth = this.userService.getUserAuth();
    if (!this.auth) {
      this.router.navigateByUrl('/menu/login');
    } else {
      const modal = await this.modalController.create({
        component: NewReservationModalPage,
        componentProps: {
          restaurant: this.selectedRestaurant,
        },
      });
      modal.present();
    }
  }

}
