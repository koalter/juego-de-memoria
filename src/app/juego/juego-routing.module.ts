import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoPage } from './juego.page';

const routes: Routes = [
  {
    path: ':difficulty',
    component: JuegoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoPageRoutingModule {}
