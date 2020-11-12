import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private urlBase = 'http://138.197.209.109:3000/api/session';
  public isAuthenticated = new BehaviorSubject<boolean>(false);
  constructor(private htttClient: HttpClient, private _reouter: Router) {}

  loginAnalyst(user: User): Observable<{ id_user: number; message: string }> {
    return this.htttClient.post<{ id_user: number; message: string }>(
      `${this.urlBase}/analyst`,
      user
    );
  }

  loginAgent(user: User): Observable<{ id_user: number; message: string }> {
    return this.htttClient.post<{ id_user: number; message: string }>(
      `${this.urlBase}/agent`,
      user
    );
  }

  logout() {
    localStorage.clear();
    this.isAuthenticated.next(false);
    this._reouter.navigate(['login']);
  }

  checkAuthenticated() {
    const id_user = localStorage.getItem('id_user');
    const authenticated = !id_user ? false : true;
    console.log(authenticated);
    this.isAuthenticated.next(authenticated);
    return authenticated;
  }
}
