import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '../../../../node_modules/@angular/router';
import { UserService } from '../../home/user.service';
import { Subject } from '../../../../node_modules/rxjs';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  // const authSub = new Subject();
  interval;
  auth = this.userService.getUserAuth();
  selectedPath = '';
  pages = [
    {
      title: 'Restaurantes',
      url: '/menu/restaurants'
    }, {
      title: 'Reservaciones',
      url: '/menu/bookings'
    }, {
      title: 'Iniciar Sesión',
      url: '/menu/login'
    }, {
      title: 'Cerrar Sesión',
      url: '/menu/home'
    }
  ];

  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      setTimeout(() => {
        this.selectedPath = event.url;
      }, 100);
    });
  }

  ngOnInit() {
    this.auth = this.userService.getUserAuth();
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.auth = this.userService.getUserAuth();
    }, 4000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
