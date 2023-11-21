import { Injectable } from '@angular/core';
import { OrderDetails } from '../models/order-details.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  details!: OrderDetails;

  constructor() { }
}
