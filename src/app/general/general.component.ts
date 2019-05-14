import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraphService } from '../graph/graph.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor(public http: HttpClient, public graph: GraphService) { }

  ngOnInit() {}

  public refreshGeneral(): void {
    this.graph.refreshGraphs();
    this.ngOnInit();
  }
}
