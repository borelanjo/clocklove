import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TopbarComponent } from './topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MomentPipe } from './shared/moment.pipe';
import { MomentFromNowPipe } from './shared/pipe/moment-from-now.pipe';
import { MomentFormatPipe } from './shared/pipe/moment-format.pipe';



@NgModule({
  declarations: [TopbarComponent, MomentPipe, MomentFormatPipe, MomentFromNowPipe],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    TopbarComponent,
    MomentFormatPipe,
    MomentFromNowPipe
  ]
})
export class CoreModule { }
