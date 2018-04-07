import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: 'app/public-theme/public-theme.module#PublicThemeModule'
  },
  {
    path: 'admin',
    loadChildren: 'app/private-theme/private-theme.module#PrivateThemeModule',
    canLoad: [AuthGuard]
  },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: LogoutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {
        enableTracing: true, // <-- debugging purposes only
      })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
