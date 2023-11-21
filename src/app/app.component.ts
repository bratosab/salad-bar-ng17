import { Component } from '@angular/core';
import { OrderDetailsService } from './services/order-details.service';
import { AppState } from './store/app.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderDetails } from './models/order-details.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'salad-bar';
  name$!: Observable<string>;
  constructor(private store: Store<{ app: AppState }>) {}

  ngOnInit() {
    this.name$ = this.store.pipe(select((state) => state.app.name));
  }
}
