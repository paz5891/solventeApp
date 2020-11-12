import { Component, OnInit, Input } from '@angular/core';
import { Beneficiary } from 'src/app/common/beneficiary';

@Component({
  selector: 'app-databeneficiaryparticular',
  templateUrl: './databeneficiaryparticular.component.html',
  styleUrls: ['./databeneficiaryparticular.component.css']
})
export class DatabeneficiaryparticularComponent implements OnInit {
  @Input() beneficiary: Beneficiary;
  constructor() { }

  ngOnInit(): void {
  }

}
