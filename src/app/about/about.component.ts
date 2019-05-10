import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public showingTeam = true;
  public showingSponsers = false;
  constructor() { }

  ngOnInit() {}

  public showTeam():void {
    this.showingTeam = true;
    this.showingSponsers = false;
  }

  public showSponsers():void {
    this.showingTeam = false;
    this.showingSponsers = true;
  }
}
