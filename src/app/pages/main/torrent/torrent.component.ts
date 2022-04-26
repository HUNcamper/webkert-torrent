import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.scss']
})
export class TorrentComponent implements OnInit {

  @Input() title = '';
  @Input() desc = '';
  @Input() image_url = '';

  constructor() { }

  ngOnInit(): void {
  }

}
