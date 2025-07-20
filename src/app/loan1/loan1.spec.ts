import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loan1 } from './loan1';

describe('Loan1', () => {
  let component: Loan1;
  let fixture: ComponentFixture<Loan1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loan1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loan1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
