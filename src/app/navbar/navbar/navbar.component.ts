import { Component } from '@angular/core';
import {LightModeService} from "../../lightMode/light-mode.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public lightMode: LightModeService) {
  }
}
