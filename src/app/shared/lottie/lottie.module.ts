import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LottiePageRoutingModule } from './lottie-routing.module';

import { LottiePage } from './lottie.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottiePageRoutingModule,
    LottieModule,
    ComponentsModule,
  ],
  declarations: [LottiePage],
})
export class LottiePageModule {}
