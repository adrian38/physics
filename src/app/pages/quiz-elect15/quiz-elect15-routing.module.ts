import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizElect15Page } from './quiz-elect15.page';

const routes: Routes = [
  {
    path: '',
    component: QuizElect15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizElect15PageRoutingModule {}
