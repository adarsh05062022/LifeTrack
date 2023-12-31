import { Component } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import 'chartjs-adapter-luxon';




@Component({
  selector: 'app-activity-chart',
  templateUrl: './activity-chart.component.html',
  styleUrls: ['./activity-chart.component.scss']
})
export class ActivityChartComponent {
  public lineChartData: ChartDataset[] = [
    {
      label: 'Expense',
      data: [14000, 15000, 13000, 14000, 16000, 12000, 15000],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      fill: false,
      tension: 0.4
    },
    {
      label: 'Income',
      data: [11900, 14000, 13000, 17000, 15000, 10000, 18000],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
      fill: false,
      tension: 0.4
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
        text: 'Income vs Expense Chart'
      }
    }
  };

  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
}
