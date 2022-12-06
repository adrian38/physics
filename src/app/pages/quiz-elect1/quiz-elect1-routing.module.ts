import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizElect1Page } from './quiz-elect1.page';

const routes: Routes = [
  {
    path: '',
    component: QuizElect1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizElect1PageRoutingModule {}
