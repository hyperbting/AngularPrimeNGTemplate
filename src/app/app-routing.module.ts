import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { PublicThemeModule } from './public-theme/public-theme.module';
import { PrivateThemeModule } from './private-theme/private-theme.module';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  {
    path: 'index',
    loadChildren: 'app/public-theme/public-theme.module#PublicThemeModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/private-theme/private-theme.module#PrivateThemeModule',
    canLoad: [AuthGuard]
  },
  { path: '**', component: LogoutComponent }
];

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
