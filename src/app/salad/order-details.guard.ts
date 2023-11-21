import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrderDetailsService } from '../services/order-details.service';

export const orderDetailsGuard: CanActivateFn = (route, state) => {
  const orderDetailsService = inject(OrderDetailsService);
  const router = inject(Router);

  if (orderDetailsService.details?.name) {
    return true;
  } else {
    router.navigate(['/'])
    return false
  }
};
