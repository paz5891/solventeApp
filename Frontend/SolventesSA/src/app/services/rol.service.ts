import { RolCatalog } from './../common/rol-catalog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private urlBase = 'http://138.197.209.109:3000/api/rolcatalog';

  constructor(private httpClient: HttpClient) { }

  getRoles(): Observable < RolCatalog[]> {
    return this.httpClient.get < RolCatalog[]>(this.urlBase);
  }
}
