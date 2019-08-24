import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcPage } from './calc.page';

describe('CalcPage', () => {
  let component: CalcPage;
  let fixture: ComponentFixture<CalcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
