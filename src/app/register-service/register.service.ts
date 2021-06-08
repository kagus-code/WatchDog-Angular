import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(userData:any):Observable<any> {
    return this.http.post('https://kagus-watchdog.herokuapp.com/user-post/', userData)
  }
}
