import { Municipality } from './../common/municipality';
import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

URLBASE = 'http://138.197.209.109:3000/api/municipalitycatalog/';

constructor(private httClient: HttpClient,
  ) { }

getMunicipality(idDepartment): Observable <Municipality[]>{
  return this.httClient.get<Municipality[]>(this.URLBASE + idDepartment);
}
}
