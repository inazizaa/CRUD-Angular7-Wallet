import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcomboComponent } from './accountcombo.component';

describe('AccountcomboComponent', () => {
  let component: AccountcomboComponent;
  let fixture: ComponentFixture<AccountcomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountcomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
