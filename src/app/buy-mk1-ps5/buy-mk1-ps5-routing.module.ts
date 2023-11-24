import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyMk1Ps5Page } from './buy-mk1-ps5.page';

const routes: Routes = [
  {
    path: '',
    component: BuyMk1Ps5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyMk1Ps5PageRoutingModule {}
