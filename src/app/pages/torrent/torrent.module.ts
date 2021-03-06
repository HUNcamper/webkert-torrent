import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TorrentRoutingModule } from './torrent-routing.module';
import { TorrentComponent } from './torrent.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    TorrentComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    TorrentRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class TorrentModule { }
