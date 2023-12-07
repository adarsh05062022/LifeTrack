import { Component } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { TransactionDetailsViewModalComponent } from '../sub_component/transaction-details-view-modal/transaction-details-view-modal.component';

interface Transaction {
  
  title: string;
  category: string;
  amount: string;
  type: string;
  messege: string;
  date: string;
}



@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {
  modalRef: MdbModalRef<TransactionDetailsViewModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}



  transactions: Transaction[] = [
    {
      
      title: 'Groceries purchase',
      category: 'Food',
      amount: '100 RS',
      type: 'Expense',
      messege: 'Bought groceries for the week and had dinner with friends.',
      date: 'November 29, 2023'
    },
    {
      
      title: 'Lunch at Restaurant',
      category: 'Dining Out',
      amount: '50 RS',
      type: 'Expense',
      messege: 'Had lunch with colleagues.',
      date: 'December 1, 2023'
    },
    // Add 8 more transactions
    {
      
      title: 'Clothing purchase',
      category: 'Clothing',
      amount: '200 RS',
      type: 'Expense',
      messege: 'Bought new clothes for an event.',
      date: 'December 5, 2023'
    },
    {
      
      title: 'Bookstore visit',
      category: 'Education',
      amount: '30 RS',
      type: 'Expense',
      messege: 'Purchased study materials.',
      date: 'December 7, 2023'
    },
    {
      
      title: 'Travel expenses',
      category: 'Travel',
      amount: '150 RS',
      type: 'Expense',
      messege: 'Travel expenses for a weekend trip.',
      date: 'December 10, 2023'
    },
    // Add more transactions
    // ...
  ];


  openModal(trans:Transaction) {
    this.modalRef = this.modalService.open(TransactionDetailsViewModalComponent,
      {
        data:{
          transaction:trans
        }
      });


    
  }
}
