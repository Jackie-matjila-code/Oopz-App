import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrepPage } from './prep.page';

const routes: Routes = [
  {
    path: '',
    component: PrepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrepPageRoutingModule {}
