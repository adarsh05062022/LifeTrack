import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-transaction-details-view-modal',
  templateUrl: './transaction-details-view-modal.component.html',
  styleUrls: ['./transaction-details-view-modal.component.scss']
})
export class TransactionDetailsViewModalComponent {
  constructor(public modalRef: MdbModalRef<TransactionDetailsViewModalComponent>) {}
}
