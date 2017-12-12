import { Action } from '@ngrx/store';
import { Post } from '../../models';

export enum PostActionTypes {
  ADD_ONE = '[Posts] Add One',
  UPDATE_ONE = '[Posts] Update One',
  DELETE_ONE = '[Posts] Delete One',
  GET_ALL_POSTS = '[Posts] Get All Post',
  GET_ALL_POSTS_SUCCESS = '[Posts] Get All Post Success'
}

export class AddOne implements Action {
  readonly type = PostActionTypes.ADD_ONE;
  constructor(public post: Post) { }
}

export class UpdateOne implements Action {
  readonly type = PostActionTypes.UPDATE_ONE;
  constructor(
    public id: string,
    public changes: Partial<Post>,
  ) { }
}

export class DeleteOne implements Action {
  readonly type = PostActionTypes.DELETE_ONE;
  constructor(public id: string) { }
}


export class GetAllPost implements Action {
  readonly type = PostActionTypes.GET_ALL_POSTS;
  constructor() { }
}

export class GetAllPostSuccess implements Action {
  readonly type = PostActionTypes.GET_ALL_POSTS_SUCCESS;
  constructor(public posts: any) { }
}

export type PostActions
  = AddOne
  | UpdateOne
  | DeleteOne
  | GetAllPost
  | GetAllPostSuccess;
