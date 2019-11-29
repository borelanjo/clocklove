import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemorableTimeRegistrationPage } from './memorable-time-registration.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MemorableTimeRegistrationPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemorableTimeRegistrationPage]
})
export class MemorableTimeRegistrationPageModule {}
