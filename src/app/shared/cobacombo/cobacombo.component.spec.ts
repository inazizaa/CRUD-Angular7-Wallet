import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobacomboComponent } from './cobacombo.component';

describe('CobacomboComponent', () => {
  let component: CobacomboComponent;
  let fixture: ComponentFixture<CobacomboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobacomboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobacomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
