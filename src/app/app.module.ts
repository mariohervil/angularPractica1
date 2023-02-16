import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer/footer.component';
import {HeaderComponent} from './header/header/header.component';
import {BodyComponent} from './body/body/body.component';
import {NavbarComponent} from './navbar/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TableComponent} from './table/table/table.component';
import {CarouselComponent} from './carousel/carousel/carousel.component';
import { PoketableComponent } from './poketable/poketable/poketable.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    NavbarComponent,
    TableComponent,
    CarouselComponent,
    PoketableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
