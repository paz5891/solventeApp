import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BouquetType } from '../common/bouquet-type';

@Injectable({
  providedIn: 'root'
})
export class BouquetTypeService {
  private urlBase: string = 'http://138.197.209.109:3000/api/bouquet_type';

  constructor(private httpClient: HttpClient) { }

  getBouquetsByType(idBouqueteType: number): Observable<BouquetType[]> {
    return this.httpClient.get<BouquetType[]>(`${this.urlBase}/${idBouqueteType}`);
  }
}
