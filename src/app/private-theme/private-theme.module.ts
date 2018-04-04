import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateThemeRoutingModule } from './private-theme-routing.module';
import { PrivateThemeComponent } from './private-theme.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    PrivateThemeRoutingModule
  ],
  declarations: [
    PrivateThemeComponent,
    IndexComponent
  ]
})
export class PrivateThemeModule { }
