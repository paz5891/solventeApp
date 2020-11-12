import { Component, OnInit, Input } from '@angular/core';
import { Beneficiary } from './../../../../../common/beneficiary';

@Component({
  selector: 'app-databeneficiaryjudicial',
  templateUrl: './databeneficiaryjudicial.component.html',
  styleUrls: ['./databeneficiaryjudicial.component.css']
})
export class DatabeneficiaryjudicialComponent implements OnInit {

  @Input() beneficiary: Beneficiary;

  constructor() { }

  ngOnInit(): void {
  }

}
