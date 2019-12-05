import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MomentPipe } from './shared/moment.pipe';
import { MomentFromNowPipe } from './shared/pipe/moment-from-now.pipe';
import { MomentFormatPipe } from './shared/pipe/moment-format.pipe';
import { LongPressDirective } from './shared/directive/long-press.directive';



@NgModule({
  declarations: [TopbarComponent, MomentPipe, MomentFormatPipe, MomentFromNowPipe, LongPressDirective],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    TopbarComponent,
    MomentFormatPipe,
    MomentFromNowPipe,
    LongPressDirective
  ]
})
export class CoreModule { }
