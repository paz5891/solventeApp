import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RevisionanalystService } from './../../services/revisionanalyst.service';
import { Attachpolicy } from './../../common/attachpolicy';
import { Revisionanalyst } from './../../common/revisionanalyst';
import { Trust } from 'src/app/common/trust';
import { Agent } from 'src/app/common/agent';
import { Beneficiary } from './../../common/beneficiary';
@Component({
  selector: 'app-revisionpolicy',
  templateUrl: './revisionpolicy.component.html',
  styleUrls: ['./revisionpolicy.component.css']
})
export class RevisionpolicyComponent implements OnInit {

  attach: Attachpolicy[];
  policy: Revisionanalyst;
  trust: Trust;
  agent: Agent;
  beneficiary: Beneficiary[];
  load: boolean;
  load1: boolean;
  id_policy;

  constructor(
    private revisionanalystService: RevisionanalystService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.load = false;
    this.load = false;
    if (this.activatedRoute.snapshot.paramMap.has('id_policy')) {
      this.id_policy = +this.activatedRoute.snapshot.paramMap.get('id_policy');
      this.getPolicy(1001, +this.activatedRoute.snapshot.paramMap.get('id_policy'));
      this.getAttach(+this.activatedRoute.snapshot.paramMap.get('id_policy'));
      this.getBeneficiary(+this.activatedRoute.snapshot.paramMap.get('id_policy'));
    }
  }

  getPolicy(id_user: number, id_policy: number): void {
    this.revisionanalystService.getPolicysingle(id_user, id_policy).subscribe(
      (res) => {
        this.policy = res[0];
        this.getTrust(this.policy.id_trust);
        this.getAgent(this.policy.id_agent);
      }
    );
  }

  getAttach(id: number): void {
    this.revisionanalystService.getPolicyAttachment(id).subscribe(
      (res) => {
        this.attach = res;
      }
    );
  }

  getTrust(id: number): void {
    this.revisionanalystService.getTrustSingle(id).subscribe(
      (res) => {
        this.trust = res[0];
        this.load1 = true;
      }
    );
  }
  getAgent(id: number): void {
    this.revisionanalystService.getAgentSingle(id).subscribe(
      (res) => {
        this.agent = res[0];
        this.load = true;
      }
    );
  }

  getBeneficiary(id: number): void {
    this.revisionanalystService.getBeneficiary(id).subscribe(
      (res) => {
        this.beneficiary = res;
      }
    );
  }
  onLoading(): boolean {
    return (this.load && this.load1);
  }
}
