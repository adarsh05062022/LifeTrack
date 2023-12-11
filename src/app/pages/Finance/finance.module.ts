import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransactionComponent } from './component/add-transaction/add-transaction.component';
import { FinanceChartComponent } from './component/finance-chart/finance-chart.component';
import { FinanceHeaderCardComponent } from './component/finance-header-card/finance-header-card.component';
import { TransactionDetailsViewModalComponent } from './component/sub_component/transaction-details-view-modal/transaction-details-view-modal.component';
import { TransactionListCardComponent } from './component/sub_component/transaction-list-card/transaction-list-card.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { FinanceComponent } from './finance/finance.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ViewTransactionComponent } from './pages/view-transaction/view-transaction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FinanceComponent,
    FinanceHeaderCardComponent,

    FinanceChartComponent,
    AddTransactionComponent,
    TransactionComponent,
    TransactionListComponent,
    TransactionListCardComponent,
    TransactionDetailsViewModalComponent,
    DashboardComponent,
    ViewTransactionComponent,
    CreateTransactionComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MdbCollapseModule,
    MdbTabsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FinanceModule { }
