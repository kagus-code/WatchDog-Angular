import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login-service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  input:any;

  constructor(private loginservice:LoginService) { }

  ngOnInit(): void {
    this.input = {
      username: '',
      password:''
    };
  }

  onLogin(){
    this.loginservice.loginUser(this.input).subscribe(
      response => {
        alert('User ' + this.input.username + ' has been loged in')
        this.input.username = '',
        this.input.password = '',
      },
      error => console.log('error', error)
    );
  
  }

}
