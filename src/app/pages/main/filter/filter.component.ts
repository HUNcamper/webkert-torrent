import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TorrentType} from "../../../shared/models/TorrentType";
import {TorrentTypeService} from "../../../shared/services/torrent-type.service";
import {FormControl} from "@angular/forms";
import {MatOptionSelectionChange} from "@angular/material/core";
import {MatSelectChange} from "@angular/material/select";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  // Output the chosen filters
  @Output() filterEvent = new EventEmitter<Array<string>>();

  torrentTypes : Array<TorrentType> = [];
  torrentTypeSelect = new FormControl('');

  constructor(private torrentTypeService: TorrentTypeService) { }

  chooseFilter($event: MatSelectChange) {
    this.filterEvent.emit(this.torrentTypeSelect.value);
    console.log("filter: " + this.torrentTypeSelect.value);
  }

  ngOnInit(): void {
    this.torrentTypeService.getAll().subscribe(data => {
      this.torrentTypes = data;
    }, error => {
      console.error(error);
    });
  }

}
