import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Post[] = [];
  postService = new PostService();
  showBtn = true;
  hideBtn = false;
  constructor() {
    // this.postService = new PostService();
    // this.posts = this.postService.getPosts();
   }

  ngOnInit(): void {
  }
  // getPosts(){
  //   this.posts = this.postService.getPosts();
  //   this.showBtn = false;
  //   this.hideBtn = true;

  // }
  hidePosts(){
    this.posts = [];
    this.showBtn = true;
    this.hideBtn = false;
  }
  thereIsPost=true;
  checkPosts(){
    this.posts = this.postService.getPosts();
    this.showBtn = false;
    this.hideBtn = true;
    if(this.posts.length > 0){
      this.thereIsPost=true;
    }else{
      this.thereIsPost=false;
      this.showBtn = true;
      this.hideBtn = false;
    }
  }



}
