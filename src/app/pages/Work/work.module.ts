import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { WorkDashboardComponent } from './pages/work-dashboard/work-dashboard.component';
import { WorkDetailsComponent } from './pages/work-details/work-details.component';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';



@NgModule({
  declarations: [
    WorkComponent,
    WorkDashboardComponent,
    WorkDetailsComponent
  ],
  imports: [
    CommonModule,
    MdbTabsModule
  ]
})
export class WorkModule { }
