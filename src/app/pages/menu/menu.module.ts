import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'first',
        loadChildren: '../first/first.module#FirstPageModule'
      }, {
        path: 'bookings',
        loadChildren: '../../bookings/bookings.module#BookingsPageModule'
      }, {
        path: 'restaurants',
        children: [
          {
            path: '',
            loadChildren: '../../restaurants/restaurants.module#RestaurantsPageModule'
          },
          {
            path: ':restaurantId',
            loadChildren: '../../restaurants/restaurant-view/restaurant-view.module#RestaurantViewPageModule'
          }
        ]
      }, {
        path: 'login',
        loadChildren: '../../login/login.module#LoginPageModule'
      }, {
        path: 'home',
        loadChildren: '../../home/home.module#HomePageModule'
      }
    ]
  }, {
    path: '',
    redirectTo: '/menu/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
