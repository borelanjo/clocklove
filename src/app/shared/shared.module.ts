import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { IonicStorageModule } from '@ionic/storage';
import { ValidationMessageComponent } from './component/validation-message/validation-message.component';
import { MemorableCardComponent } from './component/memorable-card/memorable-card.component';
import { BrMaskerModule } from 'br-mask';



@NgModule({
  declarations: [ValidationMessageComponent, MemorableCardComponent],
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
    IonicStorageModule,
    ValidationMessageComponent,
    BrMaskerModule,
    MemorableCardComponent
  ]
})
export class SharedModule { }
