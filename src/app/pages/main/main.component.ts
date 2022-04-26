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
  date : number = 0;

  constructor(private torrentService: TorrentService) { }

  ngOnInit(): void {
    this.date = Date.now();
    this.torrentService.getAll().subscribe(data => {
      this.torrents = data;
    }, error => {
      console.error(error);
    });
  }

  chooseFilter($event: Array<string>) {
    console.log("GOT: " + $event);
    this.torrentService.getByTypeId($event).subscribe(data => {
      this.torrents = data;
    }, error => {
      console.error(error);
    });
    // TODO: re-query the torrents with the selected types
  }


}
