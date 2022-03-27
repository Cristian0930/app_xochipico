import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarEditPageRoutingModule } from './agendar-edit-routing.module';

import { AgendarEditPage } from './agendar-edit.page';

import { ComponentsModule } from 'src/app/componentes/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarEditPageRoutingModule
  ],
  declarations: [AgendarEditPage]
})
export class AgendarEditPageModule {}
