import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { IonicStorageModule } from '@ionic/storage';
import { ValidationMessageComponent } from './component/validation-message/validation-message.component';
import { MemorableCardComponent } from './component/memorable-card/memorable-card.component';
import { BrMaskerModule } from 'br-mask';
import { MomentFormatPipe } from './pipe/moment-format.pipe';
import { MomentFromNowPipe } from './pipe/moment-from-now.pipe';
import { MomentPipe } from './pipe/moment.pipe';



@NgModule({
  declarations: [ValidationMessageComponent, MemorableCardComponent, MomentPipe, MomentFormatPipe, MomentFromNowPipe],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BrMaskerModule,
    IonicStorageModule.forRoot({
      name: '__clocklovedb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    MomentFormatPipe,
    MomentFromNowPipe,
    IonicStorageModule,
    ValidationMessageComponent,
    BrMaskerModule,
    MemorableCardComponent
  ]
})
export class SharedModule { }
