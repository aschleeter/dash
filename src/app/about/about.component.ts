import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public showingProject = true;
  public showingTeam = false;
  public showingSponsers = false;
  constructor() { }

  ngOnInit() {}

  public showProject():void {
    this.showingProject = true;
    this.showingTeam = false;
    this.showingSponsers = false;
  }
  public showTeam():void {
    this.showingProject = false;
    this.showingTeam = true;
    this.showingSponsers = false;
  }

  public showSponsers():void {
    this.showingProject = false;
    this.showingTeam = false;
    this.showingSponsers = true;
  }
}
