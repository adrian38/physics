import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizElect13Page } from './quiz-elect13.page';

const routes: Routes = [
  {
    path: '',
    component: QuizElect13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizElect13PageRoutingModule {}
