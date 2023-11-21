import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { orderDetailsGuard } from './order-details.guard';

describe('orderDetailsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => orderDetailsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
