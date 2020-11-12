import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageApi } from '../common/message-api';
import { Solicitud } from '../common/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private urlBase: string = 'http://138.197.209.109:3000/api/policy';

  constructor(private httpClient: HttpClient) { }

  getSolicitudes(): Observable<Solicitud[]> {
    return this.httpClient.get<Solicitud[]>(this.urlBase);
  }

  getSolicitud(id: number): Observable<Solicitud> {
    return this.httpClient.get<Solicitud>(`${this.urlBase}/${id}`);
  }

  updateSolicitud(solicitud: Solicitud): Observable<any> {
    return this.httpClient.put<any>(this.urlBase, solicitud);
  }

  createSolicitud(solicitud: FormData): Observable<any> {
    return this.httpClient.post<any>(this.urlBase, solicitud, {
      reportProgress: true,
      observe: 'events'
    }).pipe(catchError(this.errorMgmt));
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
