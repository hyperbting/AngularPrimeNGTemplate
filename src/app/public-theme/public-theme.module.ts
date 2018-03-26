import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicThemeRoutingModule } from './public-theme-routing.module';
import { PublicThemeComponent } from './public-theme.component';

import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    PublicThemeRoutingModule
  ],
  declarations: [ 
    PublicThemeComponent,
    IndexComponent, 
  ]
})
export class PublicThemeModule { }