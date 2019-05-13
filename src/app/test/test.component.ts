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
  public onPost(): void {
    if (this.testForm.valid) {
      const postData = this.testForm.value;

      this.testservice.postTest(postData).subscribe(
        data => {
          console.log(data);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
