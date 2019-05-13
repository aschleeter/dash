import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TestService {

  constructor(public http: HttpClient) { }

  public getTest6(): Observable<any> {
    return this.http.get('https://192.168.1.204:30056/');
  }

  public postTest(test: String): Observable<any> {
    return this.http.post('https://192.168.1.204:30056/', { data: test });
  }
}
