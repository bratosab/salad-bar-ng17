import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChooseTopping, GetToppings } from './store/salad.actions';
import { Observable } from 'rxjs';
import { Topping } from '../models/topping.model';
import { SaladState } from './store/salad.reducer';
import { StoreState } from '../models/store.model';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.scss',
})
export class SaladComponent implements OnInit {
  toppings$!: Observable<Topping[]>;

  constructor(private store: Store<StoreState>) {}

  ngOnInit(): void {
    this.store.dispatch(GetToppings());

    this.toppings$ = this.store.select((store) => store.salad.toppings);
  }

  selectTopping(topping: Topping) {
    this.store.dispatch(ChooseTopping(topping))
  }
}
