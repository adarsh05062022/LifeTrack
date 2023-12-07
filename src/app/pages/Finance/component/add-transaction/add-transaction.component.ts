import { Component } from '@angular/core';


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


  financeType:String[]= ["Expense","Income","Saving"]
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


