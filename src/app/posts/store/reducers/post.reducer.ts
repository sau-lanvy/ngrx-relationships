import * as actions from '../actions/post.actions';

import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Post, Comment, User } from '../../models';
import { PostActionTypes } from '../actions/post.actions';

// Entity adapter
export interface State {
  ids: string[];
  posts: {[id: string]: Post};
  comments: {[id: string]: Comment};
  users: {[id: string]: User};
  selectedPostId: string | null;
}

export const initialState: State = {
  selectedPostId: null,
  ids: [],
  posts: {},
  comments: {},
  users: {}
};

// Reducer
export function postReducer(
  state: State = initialState,
  action: actions.PostActions) {
  switch (action.type) {
      case PostActionTypes.GET_ALL_POSTS_SUCCESS: {
          return {
            ...state,
            ids: action.posts.result,
            posts: action.posts.entities.posts,
            comments: action.posts.entities.comments,
            users: action.posts.entities.users
          };
      }
      default:
          return state;
      }
}

export const getSelectedId = (state: State) => state.selectedPostId;

export const getAllPosts = (state: State) => state.posts;

export const getIds = (state: State) => state.ids;

export const getUsers = (state: State) => state.users;

export const getComments = (state: State) => state.comments;

