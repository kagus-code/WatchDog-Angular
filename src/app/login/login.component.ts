import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../login-service/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  input:any;

  constructor(private loginservice:LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.input = {
      username: '',
      password:''
    };
  }

  onLogin(){
    this.loginservice.loginUser(this.input).subscribe(
      response => {
        console.log(response)
        alert('User ' + this.input.username + ' has been loged in')
        this.input.username = '',
        this.input.password = '',
        this.router.navigateByUrl('/landing');
      },
      error => console.log('error', error)
    );
  
  }

}
