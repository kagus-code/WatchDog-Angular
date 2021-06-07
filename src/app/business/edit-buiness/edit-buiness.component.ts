import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-edit-buiness',
  templateUrl: './edit-buiness.component.html',
  styleUrls: ['./edit-buiness.component.css']
})
export class EditBuinessComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() biz:any;
  id:any;
  name:any;
  description:any;
  email:any;
  user:any;
  neighbourhood:any;

  ngOnInit(): void {
    this.id=this.id
    this.name = this.name
    this.description =this.description
    this.email =this.email
    this.user =this.user
    this.neighbourhood = this.neighbourhood
  }
  addbusiness(){
    var val ={id:this.id,
             name:this.name,
             description:this.description,
             email:this.email,
             user:this.user,
             neighbourhood: this.neighbourhood
               };
               this.service.addbusiness(val).subscribe(res=>{
                 alert("business has been added");
               });
  }

  updatebusiness(){
    var val ={id:this.id,
             name:this.name,
             description:this.description,
             email:this.email,
             user:this.user,
             neighbourhood: this.neighbourhood
               };
               this.service.updatebusiness(val).subscribe(res=>{
                 alert(res.toString());
               });
  }


}
