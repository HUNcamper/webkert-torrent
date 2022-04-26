import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TorrentType } from '../models/TorrentType';

@Injectable({
  providedIn: 'root'
})
export class TorrentTypeService {

  collectionName = 'TorrentType';

  constructor(private afs: AngularFirestore) { }

  // CRUD (Create, Read, Update, Delete)

  create(torrentType: TorrentType) {
    return this.afs.collection<TorrentType>(this.collectionName).doc(torrentType.id).set(torrentType);
  }

  getAll() {
    return this.afs.collection<TorrentType>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<TorrentType>(this.collectionName).doc(id).valueChanges();
  }

  update(torrentType: TorrentType) {
    return this.afs.collection<TorrentType>(this.collectionName).doc(torrentType.id).set(torrentType);
  }

  delete(id: string) {
    return this.afs.collection<TorrentType>(this.collectionName).doc(id).delete();
  }
}
