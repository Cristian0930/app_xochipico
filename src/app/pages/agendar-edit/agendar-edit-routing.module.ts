import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarEditPage } from './agendar-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarEditPageRoutingModule {}
