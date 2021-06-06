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
registerUser(){
  this.registerService.registerUser(this.register).subscribe(
    response => {
      alert('User ' + this.register.username + ' has been created')
      this.register.username = '',
      this.register.password = '',
      this.register.email = ''
    },
    error => console.log('error', error)
  );

}
}
