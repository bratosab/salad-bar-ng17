import { createAction, props } from '@ngrx/store';
import { Topping } from '../../models/topping.model';

export const GetToppings = createAction('salad/get/toppings');

export const SaveToppings = createAction(
  'salad/save/toppings',
  props<{ toppings: Topping[] }>()
);
