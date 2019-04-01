import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewReservationModalPage } from './new-reservation-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewReservationModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewReservationModalPage]
})
export class NewReservationModalPageModule {}
