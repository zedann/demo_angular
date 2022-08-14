import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  table_form:boolean=true;
  userPosts:User[]=[];
  constructor(private userService:UserService) { }
  apiLink =  this.userService.apiUrl;
  ngOnInit(): void {

    // this.isTherePosts();
  }

  jsonForm(){
    this.table_form = false;
  }
  tableForm(){
    this.table_form = true;

  }
  public getInfo(){
    this.userService.getInfo().subscribe(
      (response)=>{
        console.log(response)
        this.userPosts = response;
      },
        (error)=>{
          alert(error);
        }
    );
  }
  // isTherePost:boolean= false;
  // isTherePosts(){
  //   if(this.userPosts.length > 0){
  //     this.isTherePost = true;
  //   }else{
  //     this.isTherePost = false;
  //   }
  // }
}
