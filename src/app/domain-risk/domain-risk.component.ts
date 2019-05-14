import { Component, OnInit } from '@angular/core';
import { GraphService } from '../graph/graph.service';

@Component({
  selector: 'app-domain-risk',
  templateUrl: './domain-risk.component.html',
  styleUrls: ['./domain-risk.component.scss']
})
export class DomainRiskComponent implements OnInit {

  constructor(public graph: GraphService) { }

  ngOnInit() {
  }
  
  public refreshDomain(): void {
    this.graph.refreshGraphs();
  }
}
