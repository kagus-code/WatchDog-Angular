import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register-service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  register:any;

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
    this.register = {
      username: "",
      password: "",
      email:"",

    };
  }

}
