import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Torrent } from '../models/Torrent';

@Injectable({
  providedIn: 'root'
})
export class TorrentService {

  collectionName = 'Torrent';

  constructor(private afs: AngularFirestore) { }

  // CRUD (Create, Read, Update, Delete)

  create(torrent: Torrent) {
    return this.afs.collection<Torrent>(this.collectionName).doc(torrent.id).set(torrent);
  }

  getAll() {
    return this.afs.collection<Torrent>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Torrent>(this.collectionName).doc(id).valueChanges();
  }

  getByTypeId(types: Array<string>) {
    if (types.length === 0) return this.getAll();
    return this.afs.collection<Torrent>(this.collectionName, ref => ref.where('type_id', 'in', types)).valueChanges();
  }

  update(torrent: Torrent) {
    return this.afs.collection<Torrent>(this.collectionName).doc(torrent.id).set(torrent);
  }

  delete(id: string) {
    return this.afs.collection<Torrent>(this.collectionName).doc(id).delete();
  }
}
