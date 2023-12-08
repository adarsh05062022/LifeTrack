import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthComponent } from './health/health.component';
import { HealthDetailsComponent } from './pages/health-details/health-details.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { ActivityChartComponent } from './component/activity-chart/activity-chart.component';
import { CircularChartComponent } from './component/circular-chart/circular-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { PrescriptionComponent } from './component/prescription/prescription.component';
import { PrescriptionListComponent } from './component/prescription-list/prescription-list.component';



@NgModule({
  declarations: [
    HealthComponent,
    TasksComponent,
    HealthDetailsComponent,
    DashboardComponent,
    ActivityChartComponent,
    CircularChartComponent,
    PrescriptionComponent,
    PrescriptionListComponent
  ],
  imports: [
    CommonModule,
    MdbTabsModule,
    BrowserAnimationsModule,
    NgChartsModule,

  ]
})
export class HealthModule { }
