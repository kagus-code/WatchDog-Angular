import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {

  constructor(
    private service: SharedService,
    private router: Router
  ) { }

  PostList:any=[];
  

  ModalTitle: any;
  ActivateAddEditPostComp:boolean=false;
  Post:any=[]

  ngOnInit(): void {
    this.refreshPostlist();
  }

  addClick(){
    this.Post ={
      id:0,
      name:"",
      post:"",
      user:1,
      hood:""

    }
  this.ModalTitle ="Add Post"
  this.ActivateAddEditPostComp = true;
  }

  editClick(item:any){
    this.Post = item;
    this.ModalTitle = "Edit Post"
    this.ActivateAddEditPostComp = true;

  }

  closeClick(){
    this.ActivateAddEditPostComp=false;
    this.refreshPostlist();
  }

deleteClick(item:any){
  if(confirm("Are you sure you want to delete this Post"))
  this.service.deletePost(item.id).subscribe(data=>{
    alert("deleted succesfully");
    this.refreshPostlist();
  });


}

  

  refreshPostlist(){
    this.service.getPost().subscribe(data=>{
      this.PostList=data;
    });
  }


}
