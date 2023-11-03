import { Component, OnChanges, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})

export class FirstCompComponent implements OnInit,OnChanges {
    constructor(public UserService: UserServiceService){

    }
    status="loading"
    ngOnInit(): void {
      // console.log(this.status);
      this.UserService.setUserDetails("sanskar");
      console.log(this.UserService.getUserDetails());
    }
   
    ngOnChanges(): void {
      console.log(this.status);
  }
}
