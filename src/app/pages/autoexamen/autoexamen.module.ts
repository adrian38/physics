import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoexamenPageRoutingModule } from './autoexamen-routing.module';

import { AutoexamenPage } from './autoexamen.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoexamenPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AutoexamenPage],
})
export class AutoexamenPageModule {}
