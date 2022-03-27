import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservacionesPage } from './reservaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ReservacionesPage
  },
  {
    path: 'agendar-edit/:id',
    loadChildren: () => import('../agendar-edit/agendar-edit.module').then( m => m.AgendarEditPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservacionesPageRoutingModule {}
