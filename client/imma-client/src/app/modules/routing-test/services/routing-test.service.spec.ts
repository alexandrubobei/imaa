import { TestBed } from '@angular/core/testing';

import { RoutingTestService } from './routing-test.service';

describe('RoutingTestService', () => {
  let service: RoutingTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
