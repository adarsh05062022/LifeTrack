import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceHeaderCardComponent } from './finance-header-card.component';

describe('FinanceHeaderCardComponent', () => {
  let component: FinanceHeaderCardComponent;
  let fixture: ComponentFixture<FinanceHeaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceHeaderCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceHeaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
