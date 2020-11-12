import { Trust } from './../common/trust';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrustService {
  urlBase = 'http://138.197.209.109:3000/api/trust'

  constructor(private httpClient: HttpClient) { }

  createTrust(trust: Trust): Observable<any> {
    return this.httpClient.post<any>(this.urlBase, trust);
  }

  getTrusts(): Observable<Trust[]> {
    return this.httpClient.get<Trust[]>(this.urlBase);
  }
  deleteTrust(id: number): Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id
      }
    }
    return this.httpClient.delete(this.urlBase + '/' + id, options);

  }
}
