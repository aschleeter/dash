import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestService } from './../zac/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor( private testservice: TestService) { }
  testPost = {};
  testGet = {};

  ngOnInit() {}

  public onGet1(): Observable<Object> {
    this.testservice.getTest1().subscribe(
       data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
  );
  return;
  }

  public onGet2(): Observable<Object> {
    this.testservice.getTest2().subscribe(
       data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
  );
  return;
  }

  public onGet3(): Observable<Object> {
    this.testservice.getTest3().subscribe(
       data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
  );
  return;
  }
  public onGet4(): Observable<Object> {
    this.testservice.getTest4().subscribe(
       data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
  );
  return;
  }
  public onGet5(): Observable<Object> {
    this.testservice.getTest5().subscribe(
       data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
  );
  return;
  }
  public onGet7(): Observable<Object> {
    this.testservice.getTest7().subscribe(
       data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
  );
  return;
  }
  public onGet8(): Observable<Object> {
    this.testservice.getTest8().subscribe(
       data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
  );
  return;
  }
  public onGet6(): Observable<Object> {
    this.testservice.getTest6().subscribe(
       data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
  );
  return;
  }
  public onGet9(): Observable<Object> {
    this.testservice.getTest9().subscribe(
       data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
  );
  return;
  }
}
