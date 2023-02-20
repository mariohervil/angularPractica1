import { Component } from '@angular/core';
import {LightModeService} from "../../lightMode/light-mode.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public lightMode: LightModeService) {
  }
  footerInfo = {
    year: new Date().getFullYear(),
    copyright: '©',
    author: 'Mario Hernandez',
    siteName: 'MarioM6',
    email: 'mario@gmail.com',
  };

}
