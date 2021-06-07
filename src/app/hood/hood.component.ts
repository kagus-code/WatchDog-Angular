import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service'

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {

  constructor(
    private service: SharedService,
    private router: Router
  ) { }

  HoodList:any=[];

  ngOnInit(): void {
   this.refreshHoodlist();
  }
refreshHoodlist(){
  this.service.gethood().subscribe(data=>{
    this.HoodList=data;
  });
}
}
