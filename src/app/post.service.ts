import { Injectable } from '@angular/core';
import { Post } from './models/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts:Post[] = [];
  constructor() {
    this.getPosts();
  }
  ngOnInit(): void {

  }
  getPosts(){
    this.posts = [
      new Post(1,"title_1","Description for Post_1"),
      new Post(2,"title_2","Description for Post_2"),
      new Post(3,"title_3","Description for Post_3"),
      new Post(4,"title_4","Description for Post_4"),
      new Post(5,"title_5","Description for Post_5"),
      new Post(6,"title_6","Description for Post_6"),
      new Post(7,"title_7","Description for Post_7"),
      new Post(8,"title_8","Description for Post_8"),
    ];
    return this.posts;
  }

  // addPost(id:number,title:string,description:string){
  //   this.posts.push(new Post(id,title,description));
  // }
  getPostById(id:number){
    var result = this.posts.filter(obj=>{
      return obj.id === id;
    });
    return result;
  }

}
