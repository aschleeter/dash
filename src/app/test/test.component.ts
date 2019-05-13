import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestService } from './../zac/test.service';
import {
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public testForm: FormGroup;

  constructor( private testservice: TestService) { }
  testPost = {};
  testGet = {};

  ngOnInit() {}

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
  
  public onPost(): void {
    const req = this.testservice.postTest("1234");
    req.subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    req.subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
  }
}


