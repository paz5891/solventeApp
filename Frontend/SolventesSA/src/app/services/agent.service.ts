import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agent } from '../common/agent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private urlBase: string = "http://138.197.209.109:3000/api/agent";
  constructor(private httpClient:HttpClient) { }
  createAgent(agent:Agent): Observable<any> {
    console.log(agent)
    return this.httpClient.post<any>(this.urlBase, agent);
  }

  getAgents(): Observable<Agent[]> {
    return this.httpClient.get<Agent[]>(this.urlBase);
  }
}
