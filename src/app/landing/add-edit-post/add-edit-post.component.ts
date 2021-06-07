import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'
@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.css']
})
export class AddEditPostComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() postObj:any;
  id:any;
  name:any;
  post:any;
  user:any;
  hood:any;


  HoodList:any = [];

  ngOnInit(): void {
this.loadHoodList();
  }

  loadHoodList(){
  this.service.gethood().subscribe((data:any)=>{
   this.HoodList=data
   this.id=this.postObj.id
   this.name = this.postObj.name
   this.post =this.postObj.post
   this.user =this.postObj.user
   this.hood = this.postObj.hood

    });
  }
  addPost(){
    var val ={id:this.id,
             name:this.name,
             post:this.post,
            
             user:this.user,
             hood: this.hood
               };
               this.service.addPost(val).subscribe(res=>{
                 alert("Post has been added");
               });
  }

  updatePost(){
    var val ={id:this.id,
             name:this.name,
             post:this.post,
  
             user:this.user,
             hood: this. hood
               };
               this.service.updatePost(val).subscribe(res=>{
                 alert(res.toString());
               });
  }


}
