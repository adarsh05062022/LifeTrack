import { Component } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { TransactionDetailsViewModalComponent } from '../sub_component/transaction-details-view-modal/transaction-details-view-modal.component';
@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent {
  modalRef: MdbModalRef<TransactionDetailsViewModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(TransactionDetailsViewModalComponent)
  }
}
