import { normalize, schema } from 'normalizr';

const userProcessStrategy = (value, parent, key) => {
  switch (key) {
    case 'user':
      return { ...value, posts: [ parent.id ] };
    case 'commenter':
      return { ...value, comments: [ parent.id ] };
    default:
      return { ...value };
  }
};

const userMergeStrategy = (entityA, entityB) => {
  return {
    ...entityA,
    ...entityB,
    posts: [ ...(entityA.posts || []), ...(entityB.posts || []) ],
    comments: [ ...(entityA.comments || []), ...(entityB.comments || []) ]
  };
};

export const user = new schema.Entity('users', {}, {
  mergeStrategy: userMergeStrategy,
  processStrategy: userProcessStrategy
});

export const comment = new schema.Entity('comments', {
  commenter: user
}, {
  processStrategy: (value, parent, key) => {
    return { ...value, post: parent.id };
  }
});

export const post = new schema.Entity('posts', {
  author: user,
  comments: [ comment ]
});

export const postSchema = new schema.Array(post);


