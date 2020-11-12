
import { TypePerson } from './../common/type-person';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypePersonService {
  private urlBase = 'http://138.197.209.109:3000/api/typepersoncatalog';

  constructor(private httpClient: HttpClient) { }

  getTypePerson(): Observable<TypePerson[]> {
    return this.httpClient.get<TypePerson[]>(this.urlBase);
  }

  updateTypePerson(typePerson: TypePerson): Observable<TypePerson> {
    return this.httpClient.put<TypePerson>(this.urlBase, typePerson);
  }

  createTypePerson(typePerson: TypePerson): Observable<TypePerson> {
    return this.httpClient.post<TypePerson>(this.urlBase, typePerson);
  }

  deleteTypePerson(typePerson: TypePerson): Observable<TypePerson> {
    return this.httpClient.delete<TypePerson>(this.urlBase + '/' + typePerson.id_type_person);
  }
}
