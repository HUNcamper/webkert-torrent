import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LogoutComponent } from './logout/logout.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { TorrentComponent } from './torrent/torrent.component';


@NgModule({
  declarations: [
    MainComponent,
    LogoutComponent,
    TorrentComponent
  ],
  exports: [
    MainComponent
  ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class MainModule { }
