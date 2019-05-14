import { Component, OnInit } from '@angular/core';
import { UserService } from './../user/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private userservice: UserService) { }

  ngOnInit() {}

  public newUser(): void {
    this.userservice.newUser().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
