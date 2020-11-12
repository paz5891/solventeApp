import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bouquet } from '../common/bouquet';

@Injectable({
  providedIn: 'root'
})
export class BouquetService {
  private urlBase: string = 'http://138.197.209.109:3000/api/bouquet'
  
  constructor(private httpClient: HttpClient) { }

  getBouquets(): Observable<Bouquet[]> {
    return this.httpClient.get<Bouquet[]>(this.urlBase);
  }
}
