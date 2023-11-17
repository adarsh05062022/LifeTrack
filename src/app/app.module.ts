import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HOMEComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HOMEComponent,HomeSliderComponent],
  imports: [BrowserModule, AppRoutingModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
