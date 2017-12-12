import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostListComponent } from './containers/post-list/post-list.component';
import { PostDetailsComponent } from './containers/post-details/post-details.component';
import { CommentsComponent } from './components/comments/comments.component';

import { PostService } from './services/post.service';
import { PostsEffects } from './store/effects/posts.effect';
import { reducers } from './store';

const postsRoutes: Routes = [
  { path: '',  component: PostListComponent },
  { path: ':id', component: PostDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(postsRoutes),
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature([PostsEffects]),
  ],
  providers: [PostService],
  declarations: [PostListComponent, PostDetailsComponent, CommentsComponent]
})
export class PostsModule { }
