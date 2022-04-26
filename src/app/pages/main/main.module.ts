import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LogoutComponent } from './logout/logout.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { TorrentComponent } from './torrent/torrent.component';
import {MatIconModule} from "@angular/material/icon";
import { FilterComponent } from './filter/filter.component';
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    MainComponent,
    LogoutComponent,
    TorrentComponent,
    FilterComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
