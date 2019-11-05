import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'memorable-time',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../memorable-time/memorable-time.module').then(m => m.MemorableTimePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/memorable-time',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/memorable-time',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
