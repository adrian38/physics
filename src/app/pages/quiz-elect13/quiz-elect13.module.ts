import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizElect13PageRoutingModule } from './quiz-elect13-routing.module';

import { QuizElect13Page } from './quiz-elect13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizElect13PageRoutingModule
  ],
  declarations: [QuizElect13Page]
})
export class QuizElect13PageModule {}
