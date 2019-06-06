import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPagePage } from './list-page.page';

describe('ListPagePage', () => {
  let component: ListPagePage;
  let fixture: ComponentFixture<ListPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListPagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
