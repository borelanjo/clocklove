import { NgModule } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LongPressModule } from 'ionic-long-press';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { IonicGestureConfig } from './shared/util/ionic-gesture-config';



@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LongPressModule
  ],
  exports: [
    TopbarComponent,
    LongPressModule
  ],
  providers: [{provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig}],
})
export class CoreModule { }
