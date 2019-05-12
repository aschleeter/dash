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

  public onGet(): Observable<Object> {
    this.testservice.getTest().subscribe(
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
