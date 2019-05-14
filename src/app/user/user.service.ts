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

  public newUser(): Observable<any> {
    return this.http.post('https://192.168.1.204:30056/', { 'data': 'test' }, httpOptions);
  }
}
