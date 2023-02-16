import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'elements-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private http: HttpClient) {

  }

  jsonData: any;
  displayedColumns: any;
  dataSource: any;

  ngOnInit() {

    this.http.get('https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json')
      .subscribe((data) => {
        this.jsonData = data;
        this.displayedColumns = ['name', 'symbol', 'atomic_mass', 'density', 'discovered_by', 'category'];
        this.dataSource = new MatTableDataSource(this.jsonData.elements);
      });
  }
}
