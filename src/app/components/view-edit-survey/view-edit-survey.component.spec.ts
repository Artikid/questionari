import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditSurveyComponent } from './view-edit-survey.component';

describe('ViewEditSurveyComponent', () => {
  let component: ViewEditSurveyComponent;
  let fixture: ComponentFixture<ViewEditSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEditSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
