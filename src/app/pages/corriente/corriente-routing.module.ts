import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CorrientePage } from './corriente.page';

const routes: Routes = [
  {
    path: '',
    component: CorrientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CorrientePageRoutingModule {}
