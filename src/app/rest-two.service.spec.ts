import { TestBed } from '@angular/core/testing';

import { RestTwoService } from './rest-two.service';

describe('RestTwoService', () => {
  let service: RestTwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestTwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
