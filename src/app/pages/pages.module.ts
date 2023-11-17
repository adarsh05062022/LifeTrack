import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
// import { HOMEComponent } from './home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HomeSliderComponent } from '../components/home-slider/home-slider.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HomeSliderComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
