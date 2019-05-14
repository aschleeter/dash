import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NewUser } from './../user/user.model';
import { Credentials } from './../user/credentials.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  constructor(public http: HttpClient, public router: Router) {}

}
