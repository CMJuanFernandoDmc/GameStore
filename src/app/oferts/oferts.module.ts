import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfertsPageRoutingModule } from './oferts-routing.module';

import { OfertsPage } from './oferts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfertsPageRoutingModule
  ],
  declarations: [OfertsPage]
})
export class OfertsPageModule {}
