import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MomentPipe } from './shared/moment.pipe';
import { MomentFromNowPipe } from './shared/pipe/moment-from-now.pipe';
import { MomentFormatPipe } from './shared/pipe/moment-format.pipe';
import { LongPressModule } from 'ionic-long-press';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { IonicGestureConfig } from './shared/util/ionic-gesture-config';



@NgModule({
  declarations: [TopbarComponent, MomentPipe, MomentFormatPipe, MomentFromNowPipe],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LongPressModule
  ],
  exports: [
    TopbarComponent,
    MomentFormatPipe,
    MomentFromNowPipe,
    LongPressModule
  ],
  providers: [{provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig}],
})
export class CoreModule { }
