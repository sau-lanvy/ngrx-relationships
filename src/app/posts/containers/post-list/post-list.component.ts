import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from '../../models/post.model';
import * as PostActions from '../../store/actions/post.actions';
import * as fromRoot from '../../store';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private store: Store<fromRoot.State>) {
    this.posts = this.store.select(fromRoot.getPostsAndComments);
    this.store.dispatch(new PostActions.GetAllPost);
  }

  ngOnInit() {
  }

}
