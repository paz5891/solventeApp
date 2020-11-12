import { ComercialActivity } from './../common/comercial-activity';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComercialActivityService {

  URLBASE = 'http://138.197.209.109:3000/api/comercialactivitycatalog/';
  constructor(private httpClient: HttpClient
  ) { }

  getcomercialActivity(): Observable<ComercialActivity[]> {
    return this.httpClient.get<ComercialActivity[]>(this.URLBASE);
  }

  saveCommercialActivity(data: any): Observable<any> {
    const res = this.httpClient.post(this.URLBASE, data);
    return res;
  }

  updateCommercialActivity(data: any): Observable<any> {
    const res = this.httpClient.put(this.URLBASE, data);
    return res;
  }

  deleteCommercialActivity(id): Observable<any> {
    const res = this.httpClient.delete(this.URLBASE + id);
    return res;
  }
}
