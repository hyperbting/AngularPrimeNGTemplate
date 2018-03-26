import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PublicThemeModule } from './public-theme/public-theme.module';
import { PrivateThemeModule } from './private-theme/private-theme.module';

//import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: 'index',
    loadChildren: 'app/public-theme/public-theme.module#PublicThemeModule'
  },
  // {
  //   path: 'admin',
  //   loadChildren: 'app/private-theme/private-theme.module#PrivateThemeModule',
  //   canLoad: [AuthGuard]
  // },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
