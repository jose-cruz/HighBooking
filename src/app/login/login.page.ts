import { Component, OnInit } from '@angular/core';
import { UserService } from '../home/user.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  auth = this.userService.getUserAuth();
  email = '';
  pass = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private _location: Location,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    if (this.auth) {
      // route to home
      this.router.navigateByUrl('/menu/home');
    }
  }

  login() {
    if (this.userService.login(this.email, this.pass)) {
      this.router.navigateByUrl('/menu/home');
    } else {
      this.presentToast('Email o Contraseña incorrectos');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
