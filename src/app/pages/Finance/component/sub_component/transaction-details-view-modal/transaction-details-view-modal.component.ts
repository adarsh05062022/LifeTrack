import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FinanceService } from '../../../service/finance.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

interface Category {
  value: string;
  label: string;
  selected?: boolean; // Optional property for default selection
}

@Component({
  selector: 'app-transaction-details-view-modal',
  templateUrl: './transaction-details-view-modal.component.html',
  styleUrls: ['./transaction-details-view-modal.component.scss']
})
export class TransactionDetailsViewModalComponent {

  transaction: any;

  financeType:String[]= ["expense","income"]

  financeCategories: Category[] = [
    { value: 'groceries', label: 'Groceries', selected: true },
    { value: 'dining', label: 'Dining Out' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'education', label: 'Education' },
    { value: 'travel', label: 'Travel' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'gifts', label: 'Gifts' },
    { value: 'personalCare', label: 'Personal Care' },
    { value: 'charity', label: 'Charity/Donations' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'subscriptions', label: 'Subscriptions' }
  ];
  
  constructor(public modalRef: MdbModalRef<TransactionDetailsViewModalComponent>,private financeService: FinanceService,private datePipe: DatePipe,private router:Router) { }

   showDate(date:Date){
   const newdate = this.datePipe.transform(date, 'yyyy-mm-dd');
    return newdate
    
  }

  UpdateTransaction() {
    // Call the addTransaction method from the FinanceService
    // alert(this.expense)

    const newTransaction = this.transaction;
    

    newTransaction.date = this.datePipe.transform(newTransaction.date, 'yyyy-MM-dd');


    this.financeService.updateTransaction(newTransaction.transaction_id,newTransaction).subscribe(
      (response) => {
        console.log('Expense added successfully!', response);

        this.router.navigate(["/finance"]).then(()=>window.location.reload())
        
        
      },
      (error) => {
        console.error('Error adding expense:', error);
        alert("Transaction not updated")
        this.router.navigate(["/finance"]).then(()=>window.location.reload())

        
      }
    );
  }

  deleteTransaction(){

    


    this.financeService.deleteTransaction(this.transaction.transaction_id).subscribe(
      (response) => {
        console.log('Transaction deleted successfully!', response);

        this.router.navigate(["/finance"]).then(()=>window.location.reload())
        
        
      },
      (error) => {
        console.error('Error adding expense:', error);
        alert("Transaction not updated")
        this.router.navigate(["/finance"]).then(()=>window.location.reload())

        
      }
    );
  }
  

}
