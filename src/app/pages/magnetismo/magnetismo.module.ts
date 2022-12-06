import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagnetismoPageRoutingModule } from './magnetismo-routing.module';

import { MagnetismoPage } from './magnetismo.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagnetismoPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MagnetismoPage],
})
export class MagnetismoPageModule {}
