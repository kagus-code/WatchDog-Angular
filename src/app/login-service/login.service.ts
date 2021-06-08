import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(userData:any):Observable<any> {
    return this.http.post('https://kagus-watchdog.herokuapp.com/api-token-auth/', userData)
  }
}