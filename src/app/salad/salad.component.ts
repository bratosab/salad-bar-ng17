import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetToppings } from './store/salad.actions';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrl: './salad.component.scss'
})
export class SaladComponent implements OnInit {
  constructor(private store: Store){}
  
  ngOnInit(): void {
    this.store.dispatch(GetToppings())
  }
  
}
