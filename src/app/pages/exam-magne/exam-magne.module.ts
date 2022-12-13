import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamMagnePageRoutingModule } from './exam-magne-routing.module';

import { ExamMagnePage } from './exam-magne.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamMagnePageRoutingModule,
    ComponentsModule,
    ButtonModule,
  ],
  declarations: [ExamMagnePage],
})
export class ExamMagnePageModule {}
