import {Component, Input, OnInit} from '@angular/core';
import {TorrentService} from "../../shared/services/torrent.service";
import {ActivatedRoute} from "@angular/router";
import {Torrent} from "../../shared/models/Torrent";

@Component({
  selector: 'app-torrent-details',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.scss']
})
export class TorrentComponent implements OnInit {

  torrent: Torrent | undefined;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private torrentService: TorrentService) {
    route.params.subscribe((params) => {
      let torrentID: string = params["id"];

      this.torrentService.getById(torrentID).subscribe(data => {
        console.log("TORRENT ID FROM URL: " + torrentID);
        this.torrent = data;
        this.loading = false;
      }, error => {
        console.error(error);
      });
    });
  }

  ngOnInit(): void {

  }

}
