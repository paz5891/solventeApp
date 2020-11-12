import { Component, OnInit, Input } from '@angular/core';
import { Trust } from 'src/app/common/trust';

@Component({
  selector: 'app-datatrustparticular',
  templateUrl: './datatrustparticular.component.html',
  styleUrls: ['./datatrustparticular.component.css']
})
export class DatatrustparticularComponent implements OnInit {

  @Input() trust: Trust;
  constructor() { }

  ngOnInit(): void {
  }

}
