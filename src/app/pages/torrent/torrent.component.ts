import {Component, Input, OnInit} from '@angular/core';
import {TorrentService} from "../../shared/services/torrent.service";
import {ActivatedRoute} from "@angular/router";
import {Torrent} from "../../shared/models/Torrent";
import {FormControl, FormGroup} from "@angular/forms";
import {CommentService} from "../../shared/services/comment.service";
import {User} from "../../shared/models/User";
import {Comment} from "../../shared/models/Comment";

@Component({
  selector: 'app-torrent-details',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.scss']
})
export class TorrentComponent implements OnInit {

  torrent: Torrent | undefined;
  comments: Array<Comment> = [];
  loading: boolean = true;

  commentForm = new FormGroup({
    comment: new FormControl('')
  });

  async submitComment() {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    if (!user) return;

    const comment: Comment = {
      id: '', // this is set by the service
      user_email: user?.email as string,
      torrent_id: this.torrent?.id || '',
      comment: this.commentForm.get('comment')?.value,
      date: Date.now()
    };

    this.commentService.create(comment).then(_ => {
      console.log('Comment added successfully.');
      console.log(comment);
    }).catch(error => {
      console.error(error);
    })
  }

  constructor(private commentService: CommentService, private route: ActivatedRoute, private torrentService: TorrentService) {
    route.params.subscribe((params) => {
      let torrentID: string = params["id"];

      this.torrentService.getById(torrentID).subscribe(data => {
        this.commentService.getAllByTorrentId(torrentID).subscribe(data => {
          this.comments = data;
        }, error => {
          console.error(error);
        });

        console.log("TORRENT ID FROM URL: " + torrentID);
        this.torrent = data;
        this.loading = false;
      }, error => {
        console.error(error);
      });
    });
  }

  ngOnInit(): void {}

}
