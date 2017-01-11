/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TdCounterComponent } from './td-counter.component';

describe('TdCounterComponent', () => {
  let component: TdCounterComponent;
  let fixture: ComponentFixture<TdCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
