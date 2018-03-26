import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicThemeComponent } from './public-theme.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: PublicThemeComponent,
  children: [
    {
      path: '',
      children: [
        { path: '', component: IndexComponent }
      ]
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicThemeRoutingModule { }
