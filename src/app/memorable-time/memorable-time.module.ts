import { NgModule } from '@angular/core';
import { MemorableTimeListingPageModule } from './memorable-time-listing/memorable-time-listing.module';
import { MemorableTimeRegistrationPageModule } from './memorable-time-registration/memorable-time-registration.module';
import { MemorableTimeRoutingModule } from './memorable-time-routing.module';
import { MemorableTimeComponent } from './memorable-time.component';



@NgModule({
  declarations: [MemorableTimeComponent],
  imports: [
    MemorableTimeListingPageModule,
    MemorableTimeRegistrationPageModule,
    MemorableTimeRoutingModule
  ]
})
export class MemorableTimeModule { }
