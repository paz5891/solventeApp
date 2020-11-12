import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthAnalystGuard implements CanActivate {
  constructor(private _loginService: LoginService, private _router: Router) {}
  canActivate() {
    if (!this._loginService.isAuthenticated.value) {
      this._router.navigate(['login']);
      return false;
    }
    return true;
  }
}
