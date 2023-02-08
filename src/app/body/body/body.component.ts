import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import elementsJson from './elements.json';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA)
  displayedColumns: string[] = ['name', 'abbreviation'];
  elementsJson:any = 
  elements: Element[];

  ngOnInit() {
    this.elements = <Element[]>this.elements;
    
  }


}



const ELEMENT_DATA: Element[] = [
  { id: 1, name: 'Hydrogen', abbreviation: 'H' },
  { id: 2, name: 'Helium', abbreviation: 'He' },
  { id: 3, name: 'Lithium', abbreviation: 'Li' },
  { id: 4, name: 'Beryllium', abbreviation: 'Be' },
  { id: 5, name: 'Boron', abbreviation: 'B' },
  { id: 6, name: 'Carbon', abbreviation: 'C' },
  { id: 7, name: 'Nitrogen', abbreviation: 'N' },
  { id: 8, name: 'Oxygen', abbreviation: 'O' },
  { id: 9, name: 'Fluorine', abbreviation: 'F' },
  { id: 10, name: 'Neon', abbreviation: 'Ne' },
];
interface Element {
  id: number;
  name: string;
  abbreviation: string;
}
