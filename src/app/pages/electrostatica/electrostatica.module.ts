import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectrostaticaPageRoutingModule } from './electrostatica-routing.module';

import { ElectrostaticaPage } from './electrostatica.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectrostaticaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ElectrostaticaPage],
})
export class ElectrostaticaPageModule {}
