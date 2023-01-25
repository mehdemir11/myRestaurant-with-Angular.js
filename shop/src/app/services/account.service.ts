import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {
  constructor() {}
  loggedIn = false;
  login(user: User): boolean {
    if (user.username == 'demir11' && user.password == 'MehDem11') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.username);
      return true;
    } else {
      return false;
    }
  }
  isLoggedIn() {
    return this.loggedIn;
  }
  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }
}
