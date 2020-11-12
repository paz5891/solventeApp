import { Person } from './../common/person';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private urlbase = 'http://138.197.209.109:3000/api/person';

  constructor(private httpClient: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.urlbase);
  }

  getPerson(idPerson: number): Observable<Person> {
    return this.httpClient.get<Person>(`${this.urlbase}/${idPerson}`);
  }

  getPersonsByType(idTypePerson: number): Observable<Person[]> {
    const url = `${this.urlbase}/${idTypePerson}/type_person`;
    return this.httpClient.get<Person[]>(url);
  }

  savePerson(person: FormData): Observable<any> {
    return this.httpClient
      .post(this.urlbase, person, {
        reportProgress: true,
        observe: 'events',
      })
      .pipe(catchError(this.errorMgmt));
  }

  updatePerson(person: FormData): Observable<any> {
    return this.httpClient
      .put(this.urlbase, person, { reportProgress: true, observe: 'events' })
      .pipe(catchError(this.errorMgmt));
  }

  deletePerson(idPerson: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.urlbase}/${idPerson}`);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
