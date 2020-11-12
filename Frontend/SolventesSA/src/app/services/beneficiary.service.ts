import { Observable } from 'rxjs';
import { Beneficiary } from './../common/beneficiary';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';


@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
  [x: string]: any;
  urlBase = "http://138.197.209.109:3000/api/beneficiary"

  constructor(private httpClient: HttpClient) { }

  createBeneficiary(beneficiary: Beneficiary): Observable<any> {
    console.log(beneficiary)
    return this.httpClient.post<any>(this.urlBase, beneficiary);
  }

  getBeneficiaries(): Observable<Beneficiary[]> {
    return this.httpClient.get<Beneficiary[]>(this.urlBase);
  }

  deleteBeneficiary(id: number): Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: { id }
    }
      return this.httpClient.delete(this.urlBase + '/' + id, options);
  }
}
