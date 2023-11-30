import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/Home/home/home.component';
import { FinanceComponent } from './pages/Finance/finance/finance.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'finance',component:FinanceComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
