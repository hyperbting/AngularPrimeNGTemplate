import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicThemeRoutingModule } from './public-theme-routing.module';

import { PublicThemeComponent } from './public-theme.component';
import { PublicIndexComponent } from './index/public-index.component';
import { PlaygroundComponent } from './playground/playground.component';

import { AmazingTimePickerModule } from 'amazing-time-picker';
import { TimpickerComponent } from '../snippet/timpicker/timpicker.component';

@NgModule({
  imports: [
    CommonModule,
    PublicThemeRoutingModule,

    AmazingTimePickerModule,
  ],
  declarations: [
    PublicThemeComponent,
    PublicIndexComponent,
    PlaygroundComponent,
    TimpickerComponent
  ]
})
export class PublicThemeModule { }
