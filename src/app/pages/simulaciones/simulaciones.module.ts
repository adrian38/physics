import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimulacionesPageRoutingModule } from './simulaciones-routing.module';

import { SimulacionesPage } from './simulaciones.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimulacionesPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SimulacionesPage],
})
export class SimulacionesPageModule {}
