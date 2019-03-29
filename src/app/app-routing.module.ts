import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'restaurants',
    children: [
      {
        path: '',
        loadChildren: './restaurants/restaurants.module#RestaurantsPageModule'
      },
      {
        path: ':restaurantId',
        loadChildren: './restaurants/restaurant-view/restaurant-view.module#RestaurantViewPageModule'
      }
    ]
  },
  {
    path: 'bookings',
    loadChildren: './bookings/bookings.module#BookingsPageModule'
  },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
