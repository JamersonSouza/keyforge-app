import { TestBed } from '@angular/core/testing';

import { KeyforgeServiceService } from './keyforge-service.service';

describe('KeyforgeServiceService', () => {
  let service: KeyforgeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyforgeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
