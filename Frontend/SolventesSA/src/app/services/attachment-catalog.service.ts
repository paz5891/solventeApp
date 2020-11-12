import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AttachmentCatalog } from '../common/attachment-catalog';

@Injectable({
  providedIn: 'root'
})
export class AttachmentCatalogService {

  URLBASE = 'http://138.197.209.109:3000/api/attachmentcatalog';

  constructor(private httClient: HttpClient,
    ) { }

  getAttachmentCatalog (): Observable<AttachmentCatalog []>{
    return this.httClient.get<AttachmentCatalog []>(this.URLBASE);
  }
  }
