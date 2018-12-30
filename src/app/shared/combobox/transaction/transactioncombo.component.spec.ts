import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactioncomboComponent } from './transactioncombo.component';

describe('TransactioncomboComponent', () => {
  let component: TransactioncomboComponent;
  let fixture: ComponentFixture<TransactioncomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactioncomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactioncomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
