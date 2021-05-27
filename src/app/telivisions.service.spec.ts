import { TestBed } from '@angular/core/testing';

import { TelivisionsService } from './telivisions.service';

describe('TelivisionsService', () => {
  let service: TelivisionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelivisionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
