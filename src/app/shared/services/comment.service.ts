import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Comment} from "../models/Comment";
import {limit} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  collectionName = 'Comments';

  constructor(private afs: AngularFirestore) { }

  // CRUD (Create, Read, Update, Delete)

  create(comment: Comment) {
    const id = CommentService.getUniqueId(2);
    comment.id = id;
    return this.afs.collection<Comment>(this.collectionName).doc(id).set(comment);
  }

  getAll() {
    return this.afs.collection<Comment>(this.collectionName).valueChanges();
  }

  getAllByTorrentId(torrent_id: string) {
    return this.afs.collection<Comment>(this.collectionName, ref => ref.where('torrent_id', '==', torrent_id).orderBy('date', "desc")).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Comment>(this.collectionName).doc(id).valueChanges();
  }

  update(comment: Comment) {
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  delete(id: string) {
    return this.afs.collection<Comment>(this.collectionName).doc(id).delete();
  }

  /**
   * generate groups of 4 random characters
   * @example getUniqueId(1) : 607f
   * @example getUniqueId(2) : 95ca-361a-f8a1-1e73
   */
  static getUniqueId(parts: number): string {
    const stringArr = [];
    for(let i = 0; i< parts; i++){
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }
}
