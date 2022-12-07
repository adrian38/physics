import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizElect12PageRoutingModule } from './quiz-elect12-routing.module';

import { QuizElect12Page } from './quiz-elect12.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizElect12PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [QuizElect12Page],
})
export class QuizElect12PageModule {}
