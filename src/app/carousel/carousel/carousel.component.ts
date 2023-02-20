import {Component} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [1000, 1011, 984, 400, 500, 440, 550, 111, 123, 122].map((n) => `https://picsum.photos/id/${n}/1600/880`);
}
