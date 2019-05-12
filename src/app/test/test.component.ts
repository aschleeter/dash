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
  
  //onPost() {
    //this.testservice.postTest().subscribe(data => this.testPost = data);
  //}
  onGet() {
    this.testservice.getTest().subscribe(data => {
        console.log("Data recieved:", data)
      };
  }

}
