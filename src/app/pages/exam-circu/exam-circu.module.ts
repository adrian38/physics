import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamCircuPageRoutingModule } from './exam-circu-routing.module';

import { ExamCircuPage } from './exam-circu.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamCircuPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ExamCircuPage],
})
export class ExamCircuPageModule {}
