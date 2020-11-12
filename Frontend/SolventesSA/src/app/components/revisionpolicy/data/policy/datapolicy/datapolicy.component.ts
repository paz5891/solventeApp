import { Component, OnInit, Input } from '@angular/core';
import { Revisionanalyst } from 'src/app/common/revisionanalyst';


@Component({
  selector: 'app-datapolicy',
  templateUrl: './datapolicy.component.html',
  styleUrls: ['./datapolicy.component.css']
})
export class DatapolicyComponent implements OnInit {
  @Input() policy: Revisionanalyst;
  constructor() { }

  ngOnInit(): void {
  }

}
