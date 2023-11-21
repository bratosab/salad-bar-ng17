import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OrderDetailsService } from '../services/order-details.service';
import { Store, select } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { map } from 'rxjs';

export const orderDetailsGuard: CanActivateFn = (route, state) => {
  const store: Store<{ app: AppState }> = inject(Store);

  const name$ = store.pipe(select((state) => state.app.name));
  const router = inject(Router);

  return name$.pipe(
    map((name) => {
      if (name) {
        return true;
      } else {
        router.navigate(['/']);
        return false;
      }
    })
  );
};
