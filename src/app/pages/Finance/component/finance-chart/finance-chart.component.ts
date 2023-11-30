import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import 'chartjs-adapter-luxon';

@Component({
  selector: 'app-finance-chart',
  templateUrl: './finance-chart.component.html',
  styleUrls: ['./finance-chart.component.scss'],
})
export class FinanceChartComponent {
  public lineChartData: ChartDataset[] = [
    {
      label: 'Budget',
      data: [14000,15000,13000,14000,16000,12000,15000],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      stack: 'combined',
      
    },
    {
      label: 'Actual',
      data: [11900,14000,13000,17000,15000,10000,18000],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
      stack: 'combined'
    }
  ];

  public lineChartLabels: string[] = [
    'Label 1',
    'Label 2',
    'Label 3',
    'Label 4',
    'Label 5',
    'Label 6',
    'Label 7'
  ];

  public lineChartOptions: ChartOptions = {
    plugins: {
      title: {
        display: true,
        text: 'Budget vs Actual Expense'
      }
    },
    scales: {
      y: {
        stacked: true
      }
    }
  };

  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;

  getRandomNumbers(): number[] {
    return Array.from({ length: 7 }, () => Math.floor(Math.random() * 100));
  }
}
