import { Component } from '@angular/core';
import { FinanceService } from '../service/finance.service';


@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent {
  TransactionList:any={};


  constructor(private financeService: FinanceService) {}

  ngOnInit() {
    this.financeService.getTransactions().subscribe(
      (response: any) => {
        
         // Assuming the response contains a 'data' property with blog post information
         this.TransactionList = response.transactions;        
         
      },
      (error: any) => {
        console.error('Error fetching transactions:', error);
        // Handle error if needed
      }
    );
  }
}
