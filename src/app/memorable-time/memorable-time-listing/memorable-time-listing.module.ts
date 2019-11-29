import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemorableTimeListingPage } from './memorable-time-listing.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MemorableTimeListingPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MemorableTimeListingPage]
})
export class MemorableTimeListingPageModule {}
