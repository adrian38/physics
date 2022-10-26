import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoexamenPageRoutingModule } from './autoexamen-routing.module';

import { AutoexamenPage } from './autoexamen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoexamenPageRoutingModule
  ],
  declarations: [AutoexamenPage]
})
export class AutoexamenPageModule {}
