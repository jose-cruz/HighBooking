import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private logged = false;
  private subject = new Subject;
  private user: object = {
    email: 'test@mail.com',
    password: '123456',
    favorites: [
      '00001',
      '00002'
    ]
  };

  // authAnnounced$ = this.testStr.asObservable();

  constructor() { }

  login(email: string, password: string) {
    if (email === this.user['email'] && password === this.user['password']) {
      this.logged = true;
    } else {
      this.logged = false;
    }
    return this.logged;
  }

  logout() {
    this.logged = false;
  }

  getUserAuth() {
    return this.logged;
  }

  getUser() {
    return this.user;
  }

}
