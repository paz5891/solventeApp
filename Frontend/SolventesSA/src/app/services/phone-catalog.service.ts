import { PhoneCatalog } from './../common/phone-catalog';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneCatalogService {

  URLBASE = 'http://138.197.209.109:3000/api/phonecatalog';

  constructor(private httClient: HttpClient,
    ) { }

  getPhonecatalog(): Observable<PhoneCatalog[]>{
    return this.httClient.get<PhoneCatalog[]>(this.URLBASE);
  }
  }
