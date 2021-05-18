import { TestBed } from '@angular/core/testing';

import { RestOneService } from './rest-one.service';

describe('RestOneService', () => {
  let service: RestOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
