import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(public http: HttpClient) { }

  public getTest(): Observable<any> {
     return this.http.get('http://127.0.0.1:8000/');
  }  
}
