import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrepPageRoutingModule } from './prep-routing.module';

import { PrepPage } from './prep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrepPageRoutingModule
  ],
  declarations: [PrepPage]
})
export class PrepPageModule {}
