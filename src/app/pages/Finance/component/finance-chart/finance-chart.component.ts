import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

interface Transaction {
  title: string;
  category: string;
  amount: string;
  type: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-finance-chart',
  templateUrl: './finance-chart.component.html',
  styleUrls: ['./finance-chart.component.scss'],
})
export class FinanceChartComponent implements OnChanges {

  @Input() transactionList: Transaction[] = [];

  public lineChartData: ChartDataset[] = [];
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Income vs Expense Chart'
      }
    }
  };
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['transactionList'] && this.transactionList.length > 0) {
      this.updateChartData();
    }
  }

  updateChartData() {
    const currentDate = new Date();
    const monthsData: { monthLabel: string, income: number, expense: number }[] = [];

    for (let i = 6; i >= 0; i--) {
      const month = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      const monthLabel = month.toLocaleDateString('default', { month: 'short', year: 'numeric' });

      const filteredTransactions = this.transactionList.filter(transaction => {
        const transactionDate = new Date(transaction.date);
        return transactionDate.getMonth() === month.getMonth() && transactionDate.getFullYear() === month.getFullYear();
      });

      const totalIncome = filteredTransactions.reduce((sum, transaction) => {
        return transaction.type === 'income' ? sum + parseFloat(transaction.amount) : sum;
      }, 0);

      const totalExpense = filteredTransactions.reduce((sum, transaction) => {
        return transaction.type === 'expense' ? sum + parseFloat(transaction.amount) : sum;
      }, 0);

      monthsData.push({ monthLabel, income: totalIncome, expense: totalExpense });
    }

    this.lineChartData = [
      {
        label: 'Expense',
        data: monthsData.map(data => data.expense),
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        fill: false,
        tension: 0.4
      },
      {
        label: 'Income',
        data: monthsData.map(data => data.income),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.5)',
        fill: false,
        tension: 0.4
      }
    ];

    this.lineChartLabels = monthsData.map(data => data.monthLabel);
  }
}
