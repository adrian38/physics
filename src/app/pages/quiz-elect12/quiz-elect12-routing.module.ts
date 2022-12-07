import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizElect12Page } from './quiz-elect12.page';

const routes: Routes = [
  {
    path: '',
    component: QuizElect12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizElect12PageRoutingModule {}
