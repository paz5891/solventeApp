import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SibPeriod } from '../common/sib-period';

@Injectable({
  providedIn: 'root'
})
export class SibPeriodService {
  private urlBase: string = 'http://138.197.209.109:3000/api/sibperiod';

  constructor(private httpClient: HttpClient) { }

  getSibsPeriod(): Observable<SibPeriod[]> {
    return this.httpClient.get<SibPeriod[]>(this.urlBase);
  }

  saveSibsPeriod(data: any): Observable<any> {
    const res = this.httpClient.post(this.urlBase, data);
    return res;
  }

  deleteSibsPeriod(id:number): Observable<any>{
    const res = this.httpClient.delete(this.urlBase + '/' + id );
    return res;

  }
}
