import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListCardComponent } from './transaction-list-card.component';

describe('TransactionListCardComponent', () => {
  let component: TransactionListCardComponent;
  let fixture: ComponentFixture<TransactionListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
