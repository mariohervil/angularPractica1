import {Component} from '@angular/core';
import {LightModeService} from '../../lightMode/light-mode.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public lightMode: LightModeService) {
  }

  toggleLightMode() {
    this.lightMode.toggleLightMode();
    console.log(this.lightMode)
  }
}
