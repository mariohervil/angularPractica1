import { Component } from '@angular/core';
import { LightModeService } from '../../lightMode/light-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  buttonColors: { [key: string]: string } = {
    red: 'white',
    blue: 'white',
    green: 'white',
  };

  constructor(public lightMode: LightModeService) {}

  toggleLightMode() {
    this.lightMode.toggleLightMode();
    console.log(this.lightMode);
  }

  changeColor(color: string) {
    if (this.buttonColors[color] === color) {
      this.buttonColors[color] = 'white';
    } else this.buttonColors[color] = color;
  }
}
