import { DatePipe } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

interface Transaction {
  title: string;
  category: string;
  amount: string;
  type: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.scss']
})
export class ViewTransactionComponent implements OnChanges{
  @Input() transactionList: any ;
  searchInput = '';

  filteredTransactions: Transaction[] = [];

  selectedType = 'all'; // Initialize with 'all' as default

  selectedDate = ''; // Variable to store the selected date

  constructor(private datePipe: DatePipe){}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['transactionList'] && changes['transactionList'].currentValue) {
      const newTransactionList = changes['transactionList'].currentValue;
      if (newTransactionList.length > 0) {
        this.applyFilter();
      }
    }
  }

  applyFilter() {
    let filtered = this.transactionList.slice(); // Create a copy to preserve the original list
    const searchText = this.searchInput.toLowerCase().trim();

    filtered.forEach((transaction: any) => {
      const date = new Date(transaction.date);      
     const formattedDate = this.datePipe.transform(date, 'dd MMM yyyy') || ''
      transaction.date = formattedDate;
    });


    // console.log(filtered)
    
    
    filtered = filtered.filter((transaction:any) =>
      transaction.title.toLowerCase().includes(searchText) ||
      transaction.amount.includes(searchText) ||
      transaction.date.toLowerCase().includes(searchText)
    );

    if (this.selectedType !== 'all') {
      filtered = filtered.filter((transaction:any) => transaction.type === this.selectedType);
    }

    

    this.filteredTransactions = filtered;
  }

  filterTransactions() {
    this.applyFilter();
  }

  onTypeChange(event: Event) {
    this.selectedType = (event.target as HTMLSelectElement).value;
    this.applyFilter();
  }

  
  
}
