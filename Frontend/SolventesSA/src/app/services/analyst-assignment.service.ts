import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalystAssignmentService {

  private urlbase = 'http://138.197.209.109:3000/api/analystassignment';

  constructor(private httpClient: HttpClient) { }

  assignAnalyst(data: any){
    const resultado = this.httpClient.post(this.urlbase, data);
    return resultado;
  }
}
