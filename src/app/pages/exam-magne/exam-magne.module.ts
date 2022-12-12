import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamMagnePageRoutingModule } from './exam-magne-routing.module';

import { ExamMagnePage } from './exam-magne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamMagnePageRoutingModule
  ],
  declarations: [ExamMagnePage]
})
export class ExamMagnePageModule {}
