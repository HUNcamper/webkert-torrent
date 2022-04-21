import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LogoutComponent } from './logout/logout.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    MainComponent,
    LogoutComponent
  ],
  exports: [
    MainComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MatButtonModule
    ]
})
export class MainModule { }
