import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(
    private service: SharedService,
    private router: Router
  ) { }

  BusinessList:any=[];
  

  ModalTitle: any;
  ActivateAddEditBizComp:boolean=false;
  Biz:any=[]

  ngOnInit(): void {
    this.refreshBusinesslist();
  }

  addClick(){
    this.Biz ={
      id:0,
      name:"",
      description:"",
      email:"",
      user:0,
      neighbourhood:0

    }
  this.ModalTitle ="Add business"
  this.ActivateAddEditBizComp = true;
  }

  editClick(item:any){
    this.Biz = item;
    this.ModalTitle = "Edit business"
    this.ActivateAddEditBizComp = true;

  }

  closeClick(){
    this.ActivateAddEditBizComp=false;
    this.refreshBusinesslist();
  }

deleteClick(item:any){
  if(confirm("Are you sure you want to delete this business"))
  this.service.deletebusiness(item.id).subscribe(data=>{
    alert("deleted succesfully");
    this.refreshBusinesslist();
  });


}

  

  refreshBusinesslist(){
    this.service.getbusiness().subscribe(data=>{
      this.BusinessList=data;
    });
  }

}
