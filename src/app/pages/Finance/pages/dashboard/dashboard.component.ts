import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Transaction {
  title: string;
  category: string;
  amount: string;
  type: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Input() transactionList: any;

  constructor(private datePipe: DatePipe) {}

  formettedDate(dateString: string) {
    const date = new Date(dateString);
    return this.datePipe.transform(date, 'dd MMM yyyy') || '';
  }

  get recentTransaction() {
    if (this.transactionList.length > 5) {
      return this.transactionList.slice(0, 5);
    }

    return [];
  }

  get TotalExpense(): number {
    const transactionArray: Transaction[] = Object.values(this.transactionList);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    return transactionArray.reduce(
      (accumulator: number, transaction: Transaction) => {
        const transactionDate = new Date(transaction.date);
        const transactionYear = transactionDate.getFullYear();
        const transactionMonth = transactionDate.getMonth() + 1;

        // Consider only expenses (assuming 'Expense' is the type for expenses)
        if (
          transaction.type === 'expense' &&
          transactionYear === currentYear &&
          transactionMonth === currentMonth
        ) {
          // Convert amount to number and add to accumulator
          return accumulator + +transaction.amount;
        }
        return accumulator; // If it's not an expense, return accumulator as is
      },
      0 // Initial value of accumulator
    );
  }

  get TotalIncome(): number {
    const transactionArray: Transaction[] = Object.values(this.transactionList);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    return transactionArray.reduce(
      (accumulator: number, transaction: Transaction) => {
        const transactionDate = new Date(transaction.date);
        const transactionYear = transactionDate.getFullYear();
        const transactionMonth = transactionDate.getMonth() + 1;

        // Consider only expenses (assuming 'Expense' is the type for expenses)
        if (
          transaction.type === 'income' &&
          transactionYear === currentYear &&
          transactionMonth === currentMonth
        ) {
          // Convert amount to number and add to accumulator
          return accumulator + +transaction.amount;
        }
        return accumulator; // If it's not an expense, return accumulator as is
      },
      0 // Initial value of accumulator
    );
  }

  get Profit(): number {
    return this.TotalIncome - this.TotalExpense;
  }

  get ProfitPercentage(): number {
    if (this.TotalIncome === 0) {
      return 0; // Avoid division by zero
    }
    const profitPercentage = (this.Profit / this.TotalIncome) * 100;
    return parseFloat(profitPercentage.toFixed(2));
  }

  
}
