import { Component } from '@angular/core';
import { OrderDetailsService } from './services/order-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'salad-bar';

  constructor(public orderDetails: OrderDetailsService){}
}
