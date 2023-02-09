import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
//import elementsJson from './elements.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(private http: HttpClient) {

  }
  jsonData: any;
  displayedColumns: any;
  dataSource: any;
  ngOnInit() {

    this.http.get('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')
      .subscribe((data) => {
        this.jsonData = data;
        //this.jsonData.toString().replace('-', '_');
        console.log(this.jsonData);
        this.displayedColumns = ['name', 'symbol', 'atomic_mass', 'density', 'discovered_by', 'category'];
        this.dataSource = new MatTableDataSource(this.jsonData.elements);
      });
  }
}
