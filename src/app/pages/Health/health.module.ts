import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthComponent } from './health/health.component';
import { HealthDetailsComponent } from './pages/health-details/health-details.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';



@NgModule({
  declarations: [
    HealthComponent,
    TasksComponent,
    HealthDetailsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MdbTabsModule,

  ]
})
export class HealthModule { }
