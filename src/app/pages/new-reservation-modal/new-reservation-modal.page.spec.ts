import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReservationModalPage } from './new-reservation-modal.page';

describe('NewReservationModalPage', () => {
  let component: NewReservationModalPage;
  let fixture: ComponentFixture<NewReservationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReservationModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReservationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
