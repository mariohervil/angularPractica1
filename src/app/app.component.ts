import {Component} from '@angular/core';
import {LightModeService} from "./lightMode/light-mode.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public lightMode: LightModeService) {
  }

  title = 'Angular Components';


}
