import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimulationDetailPageRoutingModule } from './simulation-detail-routing.module';

import { SimulationDetailPage } from './simulation-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimulationDetailPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SimulationDetailPage],
})
export class SimulationDetailPageModule {}
