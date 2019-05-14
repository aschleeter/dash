import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  public userLogin(email: string, password: string): Observable<any> {
    return this.http.post('https://192.168.1.204:30056/', {
       'cmd':'login', 'username':email, 'password':password }, httpOptions);
  }

  public newUser(firstName: string, lastName: string, email: string, password: string ){
    return this.http.post('https://192.168.1.204:30056/', {
      'cmd':'newUser' }, httpOptions);
  }
}
