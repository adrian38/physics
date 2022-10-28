import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimulationViewPage } from './simulation-view.page';

const routes: Routes = [
  {
    path: '',
    component: SimulationViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulationViewPageRoutingModule {}
