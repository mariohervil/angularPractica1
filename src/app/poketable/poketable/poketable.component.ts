import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-poketable',
  templateUrl: './poketable.component.html',
  styleUrls: ['./poketable.component.css']
})
export class PoketableComponent implements OnInit {
  constructor(private http: HttpClient) {

  }

  pokemonData: any[] = [];
  jsonPokemonData: any = '';

  pokejson: string = '';
  jsonData: any;
  displayedColumns: any;
  dataSource: any;

  ngOnInit() {

    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      .subscribe((data) => {
        this.jsonData = data;
        this.jsonData.results.forEach((element: any) => {
          this.http.get(element.url)
            .forEach((responseData) => {
              // console.log(responseData);
              this.pokemonData.push(responseData);
              this.pokemonData.forEach((element: any) => {
                this.jsonPokemonData = element;
              });

            }).then(r => {
            console.log(this.jsonPokemonData);
          });
        });
        this.displayedColumns = ['id', 'name'];
        this.dataSource = new MatTableDataSource(this.jsonPokemonData);
      });
  }
}
