import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CoreModule,
    IonicStorageModule.forRoot({
      name: '__clocklovedb',
driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CoreModule,
    IonicStorageModule
  ]
})
export class SharedModule { }
