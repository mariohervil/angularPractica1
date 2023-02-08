import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  footerInfo = {
    year: new Date().getFullYear(),
    copyright: '©',
    author: 'Mario',
    siteName: 'MarioM6',
  };
  
}
