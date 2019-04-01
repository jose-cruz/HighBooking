import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewReservationModalTestPage } from './new-reservation-modal-test.page';

const routes: Routes = [
  {
    path: '',
    component: NewReservationModalTestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewReservationModalTestPage]
})
export class NewReservationModalTestPageModule {}
