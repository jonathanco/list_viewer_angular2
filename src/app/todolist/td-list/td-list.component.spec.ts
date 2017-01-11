/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TdListComponent } from './td-list.component';

describe('TdListComponent', () => {
  let component: TdListComponent;
  let fixture: ComponentFixture<TdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
