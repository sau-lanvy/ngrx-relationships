import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { normalize } from 'normalizr';

import * as postActions from '../actions/post.actions';
import { PostActionTypes } from '../actions/post.actions';
import { Post } from '../../models';
import { PostService } from '../../services/post.service';
import { postSchema } from '../../services/postSchema';

@Injectable()
export class PostsEffects {
  @Effect()
  getAllPosts$: Observable<Action> = this.actions$
    .ofType<postActions.GetAllPost>(PostActionTypes.GET_ALL_POSTS)
    .switchMap(() => {
        return this.postsService.getPosts()
          .map((post: any) => new postActions.GetAllPostSuccess(normalize(post, postSchema)));
    });

  constructor(
    private actions$: Actions,
    private postsService: PostService
  ) {}
}
