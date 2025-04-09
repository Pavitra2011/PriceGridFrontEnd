import { TestBed } from '@angular/core/testing';

import { PriceGridService } from './price-grid.service';

describe('PriceGridService', () => {
  let service: PriceGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
