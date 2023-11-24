import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuyMk1Ps5PageRoutingModule } from './buy-mk1-ps5-routing.module';

import { BuyMk1Ps5Page } from './buy-mk1-ps5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyMk1Ps5PageRoutingModule
  ],
  declarations: [BuyMk1Ps5Page]
})
export class BuyMk1Ps5PageModule {}
