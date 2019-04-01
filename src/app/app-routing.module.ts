import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   {
//     path: 'restaurants',
//     children: [
//       {
//         path: '',
//         loadChildren: './restaurants/restaurants.module#RestaurantsPageModule'
//       },
//       {
//         path: ':restaurantId',
//         loadChildren: './restaurants/restaurant-view/restaurant-view.module#RestaurantViewPageModule'
//       }
//     ]
//   },
//   {
//     path: 'bookings',
//     loadChildren: './bookings/bookings.module#BookingsPageModule'
//   },
//   { path: 'home', loadChildren: './home/home.module#HomePageModule' },
//   { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
//   { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
//   { path: 'first', loadChildren: './pages/first/first.module#FirstPageModule' },
//   { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' }
// ];
const routes: Routes = [
  { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'new-reservation-modal-test', loadChildren: './pages/new-reservation-modal-test/new-reservation-modal-test.module#NewReservationModalTestPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
