import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaladComponent } from './salad.component';
import { orderDetailsGuard } from './order-details.guard';

const routes: Routes = [
  {
    path: 'salad',
    component: SaladComponent,
    canActivate: [orderDetailsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladRoutingModule {}
