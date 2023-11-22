import { Injectable } from '@angular/core';
import { ToppingsService } from '../../services/toppings.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GetToppings, LoadToppings, SaveToppings } from './salad.actions';
import { map, mergeMap } from 'rxjs';

@Injectable()
export class SaladEffects {
  constructor(
    private toppingsService: ToppingsService,
    private actions$: Actions
  ) {}

  doGetToppings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadToppings),
      mergeMap(() => this.toppingsService.getToppings()),
      map((data) => SaveToppings({ toppings: data }))
    )
  );
}
