import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';
import { FinanceComponent } from './pages/Finance/finance/finance.component';
import { HealthComponent } from './pages/Health/health/health.component';
import { WorkComponent } from './pages/Work/work/work.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'finance',component:FinanceComponent},
  {path:'health',component:HealthComponent},
  {path:'work',component:WorkComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
