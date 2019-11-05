import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemorableTimePage } from './memorable-time.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MemorableTimePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MemorableTimePage]
})
export class MemorableTimePageModule {}
