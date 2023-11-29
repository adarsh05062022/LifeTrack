import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsViewModalComponent } from './transaction-details-view-modal.component';

describe('TransactionDetailsViewModalComponent', () => {
  let component: TransactionDetailsViewModalComponent;
  let fixture: ComponentFixture<TransactionDetailsViewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionDetailsViewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDetailsViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
