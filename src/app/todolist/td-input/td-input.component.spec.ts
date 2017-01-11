/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TdInputComponent } from './td-input.component';

describe('TdInputComponent', () => {
  let component: TdInputComponent;
  let fixture: ComponentFixture<TdInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
