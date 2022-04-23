import { Component, OnInit } from '@angular/core';
import { TorrentService } from "../../shared/services/torrent.service";
import {Torrent} from "../../shared/models/Torrent";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  torrents : Array<Torrent> = [];

  constructor(private torrentService: TorrentService) { }

  ngOnInit(): void {
    this.torrentService.getAll().subscribe(data => {
      this.torrents = data;
    }, error => {
      console.error(error);
    });
  }


}
