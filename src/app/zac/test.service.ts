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

  public getTest4(): Observable<any> {
    return this.http.get('https://127.0.0.1:30056/');
  }

  public getTest5(): Observable<any> {
    return this.http.get('https://localhost:30056/');
  }

  public getTest6(): Observable<any> {
    return this.http.get('https://192.168.1.204:30056/');
  }

  public getTest7(): Observable<any> {
    return this.http.get('http://localhost/');
  }

  public getTest8(): Observable<any> {
    return this.http.get('http://127.0.0.1/');
  }

  public getTest9(): Observable<any> {
    return this.http.get('http://192.168.1.204/');
  }
}
