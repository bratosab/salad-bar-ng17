import { createAction, props } from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { ActionBuilder } from '../../core/action-builder.service';

export const GetToppings = createAction('salad/get/toppings');

export const SaveToppings = createAction(
    'salad/save/toppings',
    props<{ toppings: Topping[] }>()
  );

  export const ChooseTopping = createAction(
    'salad/choose/topping',
    props<Topping>()
  );

// const SaladActions = new ActionBuilder('salad', 'toppings', props<{ toppings: Topping[] }>())
// export const LoadToppings = SaladActions.Load
// export const SuccessToppings = SaladActions.Success
