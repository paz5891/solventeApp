import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AttachmentCatalogPolicy } from '../common/attachment-catalog-policy';

@Injectable({
  providedIn: 'root'
})
export class AttachmentCatalogPolicyService {

  private baseUrl: string = 'http://138.197.209.109:3000/api/attachmentcatalogpolicy';

  constructor(private httpClient: HttpClient) { }

  getAttachmentsCatalogPolicy(): Observable<AttachmentCatalogPolicy[]> {
    return this.httpClient.get<AttachmentCatalogPolicy[]>(this.baseUrl);
  }
}
