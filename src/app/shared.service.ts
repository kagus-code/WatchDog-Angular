import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000/"

  constructor(private http:HttpClient) { }
  gethood():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/hood-post/');
  }

  addhood(val:any){
    return this.http.post(this.APIUrl + '/hood-post/',val);
  }
  updatehood(val:any){
    return this.http.put(this.APIUrl + '/hood-post/',val);
  }
  deletehood(val:any){
    return this.http.delete(this.APIUrl + '/hood-get/'+ val);
  }

}
