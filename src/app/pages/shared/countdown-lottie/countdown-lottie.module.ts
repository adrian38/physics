import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountdownLottiePageRoutingModule } from './countdown-lottie-routing.module';

import { CountdownLottiePage } from './countdown-lottie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountdownLottiePageRoutingModule
  ],
  declarations: [CountdownLottiePage]
})
export class CountdownLottiePageModule {}
