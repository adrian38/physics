import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountdownLottiePage } from './countdown-lottie.page';

const routes: Routes = [
  {
    path: '',
    component: CountdownLottiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountdownLottiePageRoutingModule {}
