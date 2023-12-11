import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';
import { FinanceComponent } from './pages/Finance/finance/finance.component';
import { HealthComponent } from './pages/Health/health/health.component';
import { WorkComponent } from './pages/Work/work/work.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'finance',component:FinanceComponent},
  {path:'health',component:HealthComponent},
  {path:'work',component:WorkComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
