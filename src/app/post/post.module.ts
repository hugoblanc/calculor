import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';



@NgModule({
  declarations: [PostsComponent, PostDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
