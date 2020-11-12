import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Revisionanalyst } from './../common/revisionanalyst';
import { Observable } from 'rxjs';
import { Attachpolicy } from '../common/attachpolicy';
import { Trust } from '../common/trust';
import { Agent } from '../common/agent';
import { Beneficiary } from '../common/beneficiary';
import { Commentattachmentpolicy } from './../common/commentattachmentpolicy';
import { Commentpolicy } from './../common/commentpolicy';

@Injectable({
  providedIn: 'root'
})
export class RevisionanalystService {

  private urlBase = 'http://138.197.209.109:3000/api/policy'
  private urlBaseAttach = 'http://138.197.209.109:3000/api/attachmentpolicy'
  private urlBaseComment = 'http://138.197.209.109:3000/api/policycomment'
  private urlBaseTrust = 'http://138.197.209.109:3000/api/trust'
  private urlBaseAgent = 'http://138.197.209.109:3000/api/agent'
  private urlBaseBeneficiary = 'http://138.197.209.109:3000/api/beneficiaryassignment'
  private urlBaseCommentAttachment = 'http://138.197.209.109:3000/api/policycommentattachment'

  constructor(private httpClient: HttpClient) { }


  getPolicy(id: number): Observable<Revisionanalyst[]> {
    return this.httpClient.get<Revisionanalyst[]>(this.urlBase + `/${id}/revision`);
  }

  getPolicysingle(id_user: number, id_policy: number): Observable<Revisionanalyst> {
    return this.httpClient.get<Revisionanalyst>(this.urlBase + `/${id_user}/${id_policy}/revision/single`);
  }

  getTrustSingle(id: number): Observable<Trust> {
    return this.httpClient.get<Trust>(this.urlBaseTrust + `/${id}`);
  }

  getAgentSingle(id: number): Observable<Agent> {
    return this.httpClient.get<Agent>(this.urlBaseAgent + `/${id}`);
  }

  getBeneficiary(id: number): Observable<Beneficiary[]> {
    return this.httpClient.get<Beneficiary[]>(this.urlBaseBeneficiary + `/${id}/policy`);
  }


  getPolicyAttachment(id: number): Observable<Attachpolicy[]> {
    return this.httpClient.get<Attachpolicy[]>(this.urlBaseAttach + `/${id}`);
  }
  ChangeCheckAttach(id: number): Observable<any> {
    return this.httpClient.patch<any>(this.urlBaseAttach + `/${id}`, null);
  }


  GetCommentAttach(id: number): Observable<Commentattachmentpolicy[]> {
    return this.httpClient.get<Commentattachmentpolicy[]>(this.urlBaseCommentAttachment + `/${id}`);
  }
  PostCommentAttach(comment): Observable<any> {
    return this.httpClient.post<any>(this.urlBaseCommentAttachment, comment);
  }
  ChangeCheckAttachcomment(id: number): Observable<any> {
    return this.httpClient.patch<any>(this.urlBaseCommentAttachment + `/${id}`, null);
  }



  getPolicyComment(id: number): Observable<Commentpolicy[]> {
    return this.httpClient.get<Commentpolicy[]>(this.urlBaseComment + `/${id}`);
  }
  postPolicyComment(comment): Observable<any> {
    return this.httpClient.post<any>(this.urlBaseComment, comment);
  }
  ChangeChecktPolicyComment(id: number): Observable<any> {
    return this.httpClient.patch<any>(this.urlBaseComment + `/${id}`, null);
  }

}
