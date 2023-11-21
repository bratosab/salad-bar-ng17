import { createReducer, on } from '@ngrx/store';
import { OrderDetails } from '../models/order-details.model';
import { SetName, SetTel } from './app.actions';

export interface AppState extends OrderDetails {
  orderId: number;
  orderStatus?: 'pending' | 'preparing' | 'ready';
}

export const initialState: AppState = {
  name: '',
  tel: '',
  orderId: 0,
};

export const appReducer = createReducer(
  initialState,
  on(SetName, (state, action) => ({ ...state, name: action.name })),
  on(SetTel, (state, action) => ({ ...state, tel: action.tel })),
);
