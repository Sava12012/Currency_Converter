import { TestBed } from '@angular/core/testing';

import { HeaderRatesServiceService } from './header-rates-service.service';

describe('HeaderRatesServiceService', () => {
  let service: HeaderRatesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderRatesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
