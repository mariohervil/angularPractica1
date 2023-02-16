import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
//import elementsJson from './elements.json';
import { HttpClient } from '@angular/common/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {
  constructor(private http: HttpClient) {

  }


}
