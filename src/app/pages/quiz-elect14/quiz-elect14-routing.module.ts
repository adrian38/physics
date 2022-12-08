import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizElect14Page } from './quiz-elect14.page';

const routes: Routes = [
  {
    path: '',
    component: QuizElect14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizElect14PageRoutingModule {}
