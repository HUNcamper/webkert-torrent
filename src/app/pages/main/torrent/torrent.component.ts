import {Component, Input, OnInit} from '@angular/core';
import {Torrent} from "../../../shared/models/Torrent";

@Component({
  selector: 'app-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.scss']
})
export class TorrentComponent implements OnInit {

  @Input() torrent : Torrent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
