import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://kagus-watchdog.herokuapp.com"

  constructor(private http:HttpClient) { }
  gethood():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/hood-post/');
  }

  addhood(val:any){
    return this.http.post(this.APIUrl + '/hood-post/',val);
  }
  updatehood(val:any){
    return this.http.put(this.APIUrl + '/hood-get/',val);
  }
  deletehood(val:any){
    return this.http.delete(this.APIUrl + '/hood-get/'+ val);
  }


  // business methods 

  getbusiness():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/business-post/');
  }

  addbusiness(val:any){
    return this.http.post(this.APIUrl + '/business-post/',val);
  }
  updatebusiness(val:any){
    return this.http.put(this.APIUrl + '/business-post/',val);
  }
  deletebusiness(val:any){
    return this.http.delete(this.APIUrl + '/business-get/'+ val);
  }


  // user methods
  getuser():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/user-post/');
  }

  updateuser(val:any){
    return this.http.put(this.APIUrl + '/user-get/',val);
  }



    // post methods 

    getPost():Observable<any[]>{
      return this.http.get<any[]>(this.APIUrl + '/post-post/');
    }
  
    addPost(val:any){
      return this.http.post(this.APIUrl + '/post-post/',val);
    }
    updatePost(val:any){
      return this.http.put(this.APIUrl + '/post-get/',val);
    }
    deletePost(val:any){
      return this.http.delete(this.APIUrl + '/post-get/'+ val);
    }
  
}
