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
              import('../memorable-time/memorable-time-listing/memorable-time-listing.module').then(m => m.MemorableTimeListingPageModule)
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
