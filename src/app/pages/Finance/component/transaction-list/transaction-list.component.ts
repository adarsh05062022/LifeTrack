import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { TransactionDetailsViewModalComponent } from '../sub_component/transaction-details-view-modal/transaction-details-view-modal.component';

interface Transaction {
  title: string;
  category: string;
  amount: string;
  type: string;
  message: string;
  date: string;
}

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent {
  @Input() transactionList!: Transaction[];

  modalRef: MdbModalRef<TransactionDetailsViewModalComponent> | null = null;

  constructor(
    private modalService: MdbModalService,
    private datePipe: DatePipe
  ) {}

  openModal(trans: Transaction) {
    this.modalRef = this.modalService.open(
      TransactionDetailsViewModalComponent,
      {
        data: {
          transaction: trans,
        },
      }
    );
  }

  formettedDate(dateString: string) {
    const date = new Date(dateString);
    return this.datePipe.transform(date, 'dd MMM yyyy') || '';
  }
}
