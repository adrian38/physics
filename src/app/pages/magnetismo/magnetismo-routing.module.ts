import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagnetismoPage } from './magnetismo.page';

const routes: Routes = [
  {
    path: '',
    component: MagnetismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagnetismoPageRoutingModule {}
