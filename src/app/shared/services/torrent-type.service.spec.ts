import { TestBed } from '@angular/core/testing';

import { TorrentTypeService } from './torrent-type.service';

describe('TorrentTypeService', () => {
  let service: TorrentTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TorrentTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
