import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/Home/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './pages/Home/components/hero/hero.component';
import { AboutComponent } from './pages/Home/components/about/about.component';
import { FeatureComponent } from './pages/Home/components/feature/feature.component';
import { TeamComponent } from './pages/Home/components/team/team.component';
import { FooterComponent } from './pages/Home/components/footer/footer.component';

import { FinanceComponent } from './pages/Finance/finance/finance.component';
import { FinanceHeaderCardComponent } from './pages/Finance/component/finance-header-card/finance-header-card.component';
import { FinanceChartComponent } from './pages/Finance/component/finance-chart/finance-chart.component';
import { AddTransactionComponent } from './pages/Finance/component/add-transaction/add-transaction.component';
import { TransactionComponent } from './pages/Finance/component/transaction/transaction.component';
import { TransactionListComponent } from './pages/Finance/component/transaction-list/transaction-list.component';
import { TransactionListCardComponent } from './pages/Finance/component/sub_component/transaction-list-card/transaction-list-card.component';
import { TransactionDetailsViewModalComponent } from './pages/Finance/component/sub_component/transaction-details-view-modal/transaction-details-view-modal.component';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './pages/Finance/pages/dashboard/dashboard.component';
import { ViewTransactionComponent } from './pages/Finance/pages/view-transaction/view-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTransactionComponent } from './pages/Finance/pages/create-transaction/create-transaction.component';
import { HealthComponent } from './pages/Health/health/health.component';
import { TasksComponent } from './pages/Health/pages/tasks/tasks.component';
import { HealthDetailsComponent } from './pages/Health/pages/health-details/health-details.component';
// import { HealthdashboardComponent } from './pages/Health/pages/dashboard/dashboard.component';
import { FinanceModule } from './pages/Finance/finance.module';
import { HealthModule } from './pages/Health/health.module';
import { WorkModule } from './pages/Work/work.module';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    FeatureComponent,
    TeamComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    BrowserAnimationsModule,
    NgChartsModule,
    FormsModule,
    FinanceModule,
    HealthModule,
    WorkModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
