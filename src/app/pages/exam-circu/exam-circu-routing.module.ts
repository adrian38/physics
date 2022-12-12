import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamCircuPage } from './exam-circu.page';

const routes: Routes = [
  {
    path: '',
    component: ExamCircuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamCircuPageRoutingModule {}
