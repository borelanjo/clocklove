import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorableTimePage } from './memorable-time.page';

describe('MemorableTimePage', () => {
  let component: MemorableTimePage;
  let fixture: ComponentFixture<MemorableTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorableTimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorableTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
