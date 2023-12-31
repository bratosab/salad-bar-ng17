import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChooseTopping, GetToppings } from './store/salad.actions';
import { Observable } from 'rxjs';
import { Topping } from '../models/topping.model';
import { SaladState, selectAvailableToppings } from './store/salad.reducer';
import { StoreState } from '../models/store.model';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaladComponent implements OnInit {
  toppings$!: Observable<Topping[]>;
  choices$!: Observable<Topping[]>;
  dressing$!: Observable<string>;

  constructor(private store: Store<StoreState>) {}

  ngOnInit(): void {
    this.store.dispatch(GetToppings());

    this.toppings$ = this.store.select(selectAvailableToppings);
    this.choices$ = this.store.select((store) => store.salad.choices);
    this.dressing$ = this.store.select((store) => store.salad.dressing);
  }

  selectTopping(topping: Topping) {
    this.store.dispatch(ChooseTopping(topping))
  }
}
