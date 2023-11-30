import { Component } from '@angular/core';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent {
  expense: any = {};

  submitExpense() {
    // Perform action on form submission (logging to console in this case)
    console.log('Submitted Expense:', this.expense);
    // Clear the form after submission
    this.resetExpense();
  }

  resetExpense() {
    // Reset the expense object to clear the form
    this.expense = {};
  }

}
