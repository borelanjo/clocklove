import { TestBed } from '@angular/core/testing';

import { MemorableTimeService } from './memorable-time.service';

describe('MemorableTimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemorableTimeService = TestBed.get(MemorableTimeService);
    expect(service).toBeTruthy();
  });
});
