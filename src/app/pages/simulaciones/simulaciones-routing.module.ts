import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimulacionesPage } from './simulaciones.page';

const routes: Routes = [
  {
    path: '',
    component: SimulacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimulacionesPageRoutingModule {}
