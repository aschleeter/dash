import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Credentials } from './../user/credentials.model';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public showingLogin = true;
  public showingSignup = false;
  constructor(public authService: AuthService,) {}

  ngOnInit() {}

  public showLogin(): void {
    this.showingLogin = true;
    this.showingSignup = false;
  }

  public showSignup(): void {
    this.showingLogin = false;
    this.showingSignup = true;
  }

  public onSubmit(): void {
    this.loginForm.controls.usernameOrEmail.markAsDirty();
    this.loginForm.controls.password.markAsDirty();
  }
}
