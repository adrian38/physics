import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamMagnePage } from './exam-magne.page';

const routes: Routes = [
  {
    path: '',
    component: ExamMagnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamMagnePageRoutingModule {}
