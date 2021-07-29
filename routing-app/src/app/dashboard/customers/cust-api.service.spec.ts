import { TestBed } from '@angular/core/testing';

import { CustApiService } from './cust-api.service';

describe('CustApiService', () => {
  let service: CustApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
