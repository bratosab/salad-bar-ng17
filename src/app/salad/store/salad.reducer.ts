import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { Topping } from '../../models/topping.model';
import { ChooseTopping, SaveToppings } from './salad.actions';

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
  on(SaveToppings, (state, action) => ({
    ...state,
    toppings: [...action.toppings],
  })),
  on(ChooseTopping, (state, action) => ({
    ...state,
    choices: [...state.choices, action],
  }))
);

export const selectSalad = createFeatureSelector<SaladState>('salad');

export const selectAvailableToppings = createSelector(
  selectSalad,
  ({ toppings, choices }) => {
    return toppings.reduce((availableToppings, topping) => {
      const isChoice = choices.some((choice) => choice.id === topping.id);

      if (!isChoice) {
        return [...availableToppings, topping];
      } else {
        return availableToppings
      }
    }, new Array<Topping>);
  }
);
