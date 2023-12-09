import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalHealthDetailsComponent } from './personal-health-details.component';

describe('PersonalHealthDetailsComponent', () => {
  let component: PersonalHealthDetailsComponent;
  let fixture: ComponentFixture<PersonalHealthDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalHealthDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalHealthDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
