import { Component, OnInit, Input } from '@angular/core';
import { Trust } from 'src/app/common/trust';

@Component({
  selector: 'app-datatrustjudicial',
  templateUrl: './datatrustjudicial.component.html',
  styleUrls: ['./datatrustjudicial.component.css']
})
export class DatatrustjudicialComponent implements OnInit {
  @Input() trust: Trust;
  constructor() { }

  ngOnInit(): void {
  }

}
