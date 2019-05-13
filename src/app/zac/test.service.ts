import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'text/plain'
  })
};

@Injectable({
  providedIn: 'root'
})


export class TestService {
  constructor(public http: HttpClient) { }

  public getTest6(): Observable<any> {
    return this.http.get('https://192.168.1.204:30056/');
  }

  public postTest(test): Observable<any> {
    return this.http.post('https://192.168.1.204:30056/', { 'data': 'test' }, httpOptions);
  }
}