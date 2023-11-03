import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  Name!: string ;
  apiUrl = 'https://ipapi.co/json';
  constructor(private http: HttpClient) { }
  
  getIPDetails(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}`);
  }
  getUserDetails(){
    return this.Name;
  }
  setUserDetails(name:string){
      this.Name = name;
  }
}
