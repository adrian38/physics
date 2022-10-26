import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AvatarModule } from 'primeng/avatar';

import { IonicModule } from '@ionic/angular';
import { CardGeneralComponent } from './card-general/card-general.component';

@NgModule({
  declarations: [HeaderComponent, CardGeneralComponent],
  exports: [HeaderComponent, CardGeneralComponent],
  imports: [CommonModule, IonicModule, AvatarModule],
})
export class ComponentsModule {}
