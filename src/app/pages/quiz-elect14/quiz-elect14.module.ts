import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizElect14PageRoutingModule } from './quiz-elect14-routing.module';

import { QuizElect14Page } from './quiz-elect14.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizElect14PageRoutingModule,
    ComponentsModule,
    RadioButtonModule,
  ],
  declarations: [QuizElect14Page],
})
export class QuizElect14PageModule {}
