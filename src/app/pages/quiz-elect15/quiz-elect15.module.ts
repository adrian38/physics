import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizElect15PageRoutingModule } from './quiz-elect15-routing.module';

import { QuizElect15Page } from './quiz-elect15.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizElect15PageRoutingModule,
    ComponentsModule,
    RadioButtonModule,
    ButtonModule,
  ],
  declarations: [QuizElect15Page],
})
export class QuizElect15PageModule {}
