import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GraphService } from '../graph/graph.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  constructor(public http: HttpClient, public graph: GraphService) { }

  ngOnInit() {
  }

  imgUrl: string;
  imageToShow: any;
  isImageLoading: boolean;

  createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
  }

  getImageFromService() {
      this.isImageLoading = true;
      this.graph.getImage(this.imgUrl).subscribe(data => {
        this.createImageFromBlob(data);
        this.isImageLoading = false;
      }, error => {
        this.isImageLoading = false;
        console.log(error);
      });
  }
}
