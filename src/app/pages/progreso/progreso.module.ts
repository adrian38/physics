import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresoPageRoutingModule } from './progreso-routing.module';

import { ProgresoPage } from './progreso.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresoPageRoutingModule,
    ComponentsModule,
    ChartModule,
  ],
  declarations: [ProgresoPage],
})
export class ProgresoPageModule {}
