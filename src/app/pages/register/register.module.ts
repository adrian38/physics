import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { ButtonModule } from 'primeng/button';
import { ComponentsModule } from 'src/app/components/components.module';

import { LottieModule } from 'ngx-lottie';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ButtonModule,
    ComponentsModule,
    LottieModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
