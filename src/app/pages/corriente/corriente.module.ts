import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorrientePageRoutingModule } from './corriente-routing.module';

import { CorrientePage } from './corriente.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorrientePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [CorrientePage],
})
export class CorrientePageModule {}
