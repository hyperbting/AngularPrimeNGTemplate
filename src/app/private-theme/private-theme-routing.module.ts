import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { PrivateThemeComponent } from './private-theme.component';

import { AuthGuard } from '../guard/auth.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: PrivateThemeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          //{ path: 'crises', component: ManageCrisesComponent },
          { path: '', component: IndexComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class PrivateThemeRoutingModule { }
