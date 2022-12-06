import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectrostaticaPage } from './electrostatica.page';

const routes: Routes = [
  {
    path: '',
    component: ElectrostaticaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectrostaticaPageRoutingModule {}
