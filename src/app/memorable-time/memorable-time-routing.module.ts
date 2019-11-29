import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MemorableTimeListingPage } from './memorable-time-listing/memorable-time-listing.page';
import { MemorableTimeRegistrationPage } from './memorable-time-registration/memorable-time-registration.page';

const routes: Routes = [
  {
    path: 'memorable-time',
    children: [
      {
        path: '',
        component : MemorableTimeListingPage
      },
      {
        path: 'new',
        component : MemorableTimeRegistrationPage
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemorableTimeRoutingModule {}
