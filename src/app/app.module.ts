import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HOMEComponent } from './pages/home/home.component';
import { PagesModule } from './pages/pages.module';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturesComponent } from './components/features/features.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HOMEComponent,HomeSliderComponent, AboutComponent, FeaturesComponent, TeamComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
