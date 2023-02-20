import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LightModeService {
  public lightModeOn = false;

  toggleLightMode() {
    this.lightModeOn = !this.lightModeOn;
  }
}
