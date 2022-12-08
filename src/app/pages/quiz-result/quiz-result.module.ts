import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizResultPageRoutingModule } from './quiz-result-routing.module';

import { QuizResultPage } from './quiz-result.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ButtonModule } from 'primeng/button';
import { LottieModule } from 'ngx-lottie';
// import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizResultPageRoutingModule,
    ComponentsModule,
    ButtonModule,
    LottieModule,
  ],
  declarations: [QuizResultPage],
})
export class QuizResultPageModule {}
