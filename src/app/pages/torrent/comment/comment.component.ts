import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../shared/models/Comment";
import {UserService} from "../../../shared/services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {CommentService} from "../../../shared/services/comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment : Comment | undefined;

  author: string | undefined;
  editing: boolean = false;
  own_comment: boolean = false;

  commentEditForm = new FormGroup({
    comment: new FormControl('')
  });

  constructor(private commentService: CommentService, private userService: UserService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    if (user && user.email == this.comment?.user_email) {
      this.own_comment = true;
    }

    this.commentEditForm.setValue({
      comment: this.comment?.comment,
    });

    console.log(this.comment?.user_email);
    this.userService.getByEmail(this.comment?.user_email || '').subscribe(data => {
      console.log(data);
      this.author = data[0]?.username;
    }, error => {
      console.error(error);
    });
  }

  submitEdit() {
    if (!this.comment) return;

    this.comment.comment = this.commentEditForm.get('comment')?.value;

    this.commentService.update(this.comment).then(_ => {
      console.log("comment successfully updated.");
    }, error => {
      console.error(error);
    });
  }

  cancelEdit() {
    this.editing = false;
  }

  startEdit() {
    this.editing = true;
  }

  delete() {
    if (!this.comment) return;
    this.commentService.delete(this.comment.id).then(_ => console.log("Succesfully deleted comment"));
  }
}
