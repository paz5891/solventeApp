import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { UserSystem } from '../common/user-system';

@Injectable({
  providedIn: 'root'
})
export class UserSystemService {

  private urlBase =  'http://138.197.209.109:3000/api/usersystem';

  constructor(private httpClient: HttpClient) {    }
    getUserSystem(): Observable<UserSystem[]> {
    return this.httpClient.get<UserSystem[]>(this.urlBase);

  }
  updateUserSystem(userSystem: UserSystem): Observable<UserSystem> {
    return this.httpClient.put<UserSystem>(this.urlBase, userSystem);
  }

  createUserSystem(userSystem: UserSystem): Observable<UserSystem> {
    return this.httpClient.post<UserSystem>(this.urlBase, userSystem);
  }

  deleteUserSystem(userSystem: UserSystem): Observable<UserSystem> {
    return this.httpClient.delete<UserSystem>(this.urlBase + '/' + userSystem.id_user);
  }
}
