import { TestBed, inject } from '@angular/core/testing';

import { SurveyByIdService } from './survey-by-id.service';

describe('SurveyByIdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyByIdService]
    });
  });

  it('should be created', inject([SurveyByIdService], (service: SurveyByIdService) => {
    expect(service).toBeTruthy();
  }));
});
