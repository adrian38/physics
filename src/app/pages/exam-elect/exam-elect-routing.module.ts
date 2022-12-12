import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamElectPage } from './exam-elect.page';

const routes: Routes = [
  {
    path: '',
    component: ExamElectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamElectPageRoutingModule {}
