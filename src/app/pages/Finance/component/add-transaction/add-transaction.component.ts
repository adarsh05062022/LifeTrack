import { Component } from '@angular/core';
import { FinanceService } from '../../service/finance.service';
import { DatePipe } from '@angular/common';


interface Category {
  value: string;
  label: string;
  selected?: boolean; // Optional property for default selection
}

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})





export class AddTransactionComponent {
  expense: any = {};


  financeType:String[]= ["Expense","Income"]
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


  constructor(private financeService: FinanceService,private datePipe: DatePipe) {}

  submitExpense() {
    // Call the addTransaction method from the FinanceService
    // alert(this.expense)
    console.log(this.expense)

    this.expense.date = this.datePipe.transform(this.expense.date, 'yyyy-MM-dd');

    this.financeService.addTransaction(this.expense).subscribe(
      (response) => {
        console.log('Expense added successfully!', response);
        // Optionally, perform actions after successful addition
        this.resetExpense(); // Clear the form after submission
      },
      (error) => {
        console.error('Error adding expense:', error);
        // Handle error if needed
      }
    );
  }

  resetExpense() {
    // Reset the expense object to clear the form
    this.expense = {};
  }

}


