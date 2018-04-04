import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicThemeComponent } from './public-theme.component';
import { IndexComponent } from './index/index.component';
import { PlaygroundComponent } from './playground/playground.component';

const publicRoutes: Routes = [
  {
    path: '',
    component: PublicThemeComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'playground',
            component: PlaygroundComponent
          },
          {
            path: '',
            component: IndexComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(publicRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PublicThemeRoutingModule { }
