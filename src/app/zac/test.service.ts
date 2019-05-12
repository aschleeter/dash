import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(public http: HttpClient) { }

  public getTest1(): Observable<any> {
     return this.http.get('http://127.0.0.1:30056/');
  }  
  public getTest2(): Observable<any> {
    return this.http.get('http://localhost:30056/');
 }  
 public getTest3(): Observable<any> {
  return this.http.get('http://192.168.1.204:30056/');
}
}
