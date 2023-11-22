import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topping } from '../../models/topping.model';

@Component({
  selector: 'app-toppings',
  templateUrl: './toppings.component.html',
  styleUrl: './toppings.component.scss'
})
export class ToppingsComponent {
  @Input() toppings!: Topping[];
  @Output() chooseTopping = new EventEmitter<Topping>();

  selectTopping(topping: Topping) {
    this.chooseTopping.emit(topping)
  }
}
