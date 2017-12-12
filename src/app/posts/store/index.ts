import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPost from './reducers/post.reducer';

export interface PostsState {
  posts: fromPost.State;
}

export interface State {
  'posts': PostsState;
}

export const reducers = {
  posts: fromPost.postReducer,
};

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPostEntitiesState = createSelector(
  getPostsState,
  state => state.posts
);

export const getSelectedPostId = createSelector(
  getPostEntitiesState,
  fromPost.getSelectedId
);

export const getPostEntities = createSelector(
  getPostEntitiesState,
  fromPost.getAllPosts
);

export const getPostIds = createSelector(
  getPostEntitiesState,
  fromPost.getIds
);

export const getCommentEntities = createSelector(
  getPostEntitiesState,
  fromPost.getComments
);

export const getAllPosts = createSelector(getPostEntities, getPostIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});

export const getPostsAndComments = createSelector(getAllPosts, getCommentEntities,
  (posts, comments) => {
      return posts.map(post => {
            return {...post, comments: post.comments.map(comment => comments[comment])};
      });
});

export const getSelectedPost = createSelector(
  getPostEntities,
  getSelectedPostId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);
