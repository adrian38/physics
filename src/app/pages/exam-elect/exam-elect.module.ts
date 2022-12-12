import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamElectPageRoutingModule } from './exam-elect-routing.module';

import { ExamElectPage } from './exam-elect.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamElectPageRoutingModule,
    ComponentsModule,
    ButtonModule,
  ],
  declarations: [ExamElectPage],
})
export class ExamElectPageModule {}
