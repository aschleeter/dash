import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public http: HttpClient) { }

  public getTest(): void {
    return this.http.get('http://localhost:30056/')
    );
  }  
}
