import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamCircuPageRoutingModule } from './exam-circu-routing.module';

import { ExamCircuPage } from './exam-circu.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamCircuPageRoutingModule,
    ComponentsModule,
    ButtonModule,
  ],
  declarations: [ExamCircuPage],
})
export class ExamCircuPageModule {}
