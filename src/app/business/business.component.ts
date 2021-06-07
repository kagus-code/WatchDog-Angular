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

  ngOnInit(): void {
    this.refreshBusinesslist();
  }

  refreshBusinesslist(){
    this.service.getbusiness().subscribe(data=>{
      this.BusinessList=data;
    });
  }

}
