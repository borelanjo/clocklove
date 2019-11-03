import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
