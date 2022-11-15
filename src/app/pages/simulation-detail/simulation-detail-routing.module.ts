import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimulationDetailPage } from './simulation-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SimulationDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationDetailPageRoutingModule {}
