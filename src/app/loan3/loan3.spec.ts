import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loan3 } from './loan3';

describe('Loan3', () => {
  let component: Loan3;
  let fixture: ComponentFixture<Loan3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loan3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loan3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
