import { createReducer, on } from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { SaveToppings } from './salad.actions';

export interface SaladState {
  toppings: Topping[];
  choices: Topping[];
  dressing: string;
}

export const initialState: SaladState = {
  toppings: [],
  choices: [],
  dressing: 'Cesar',
};

export const saladReducer = createReducer(
    initialState,
    on(SaveToppings, (state, action) => ({...state, toppings: [...action.toppings]}))
)