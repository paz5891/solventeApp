import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressCatalog } from '../common/address-catalog';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  URLBASE = 'http://138.197.209.109:3000/api/addresscatalog';

  constructor(private httClient: HttpClient,
    ) { }

  getadresses(): Observable<AddressCatalog[]>{
    return this.httClient.get<AddressCatalog[]>(this.URLBASE);
  }
  }
