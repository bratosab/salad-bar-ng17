import { createAction, props } from '@ngrx/store';
import { OrderDetails } from '../models/order-details.model';

export const SetName = createAction(
  'app/set/name',
  props<Pick<OrderDetails, 'name'>>()
);
