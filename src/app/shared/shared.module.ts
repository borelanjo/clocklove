import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CoreModule,
    NgxDatatableModule
  ],
  exports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CoreModule,
    NgxDatatableModule
  ]
})
export class SharedModule { }
