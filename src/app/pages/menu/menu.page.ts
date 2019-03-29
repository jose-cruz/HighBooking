import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '../../../../node_modules/@angular/router';
import { UserService } from '../../home/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  auth = this.userService.getUserAuth();
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

  selectedPath = '';

  constructor(
    private router: Router,
    private userService: UserService,
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
      console.log(event);
    });
  }

  ngOnInit() {
  }

}
