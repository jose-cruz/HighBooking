import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private logged = false;

  private user: object = {
    email: 'test@mail.com',
    password: '123456',
    favorites: [
      '00001',
      '00002'
    ]
  };

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
