import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OrderDetailsService } from '../services/order-details.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { SetName, SetTel } from '../store/app.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  orderForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    tel: [''],
  });

  constructor(
    private fb: FormBuilder,
    private orderDetailsService: OrderDetailsService,
    private router: Router,
    private store: Store<{ app: AppState }>
  ) {}

  startOrder() {
    if (!this.orderForm.invalid) {
      this.store.dispatch(
        SetName({ name: this.orderForm.controls.name.value })
      );
      this.store.dispatch(
        SetTel({ tel: this.orderForm.controls.name.value })
      );

      this.router.navigate(['salad']);
    }
  }
}
