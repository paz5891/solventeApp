import { Component, OnInit, Input } from '@angular/core';
import { Agent } from 'src/app/common/agent';

@Component({
  selector: 'app-dataagent',
  templateUrl: './dataagent.component.html',
  styleUrls: ['./dataagent.component.css']
})
export class DataagentComponent implements OnInit {
  @Input() agent: Agent
  constructor() { }

  ngOnInit(): void {
  }

}
