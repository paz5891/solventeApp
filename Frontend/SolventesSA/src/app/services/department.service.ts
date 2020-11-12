import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../common/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private urlBase = 'http://138.197.209.109:3000/api/departmentcatalog';

  constructor(private httpClient: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.urlBase);
  }

  
}
