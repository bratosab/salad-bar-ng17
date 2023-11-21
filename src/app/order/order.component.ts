import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OrderDetailsService } from '../services/order-details.service';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}

  startOrder() {
    if (!this.orderForm.invalid) {
      this.orderDetailsService.details = {
        name: this.orderForm.controls.name.value,
        tel: this.orderForm.controls.tel.value,
      }

      this.router.navigate(['salad'])
    }
  }
}
