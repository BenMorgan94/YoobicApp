import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionListPage } from './mission-list.page';

describe('MissionListPage', () => {
  let component: MissionListPage;
  let fixture: ComponentFixture<MissionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MissionListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
