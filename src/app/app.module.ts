import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

//// service
import { AuthService } from './private-theme/service/auth.service';
import { LocalService } from './private-theme/service/local.service';

//// base pages
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    LocalService,
    AuthService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
