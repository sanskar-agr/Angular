import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    Name: string="" 
    ipDetail: any;
    @Input() title="";
    @Output() newItemEvent = new EventEmitter<string>();

    
    constructor(public UserService: UserServiceService){

    }
    ngOnInit():void {
      this.UserService.getIPDetails().subscribe((data:any)=>{
        this.ipDetail = data;
      })
      this.Name=this.UserService.getUserDetails();
    }
    addNewItem(value: string) {
      this.newItemEvent.emit(value);
    }
    getIPDetail():void{
      console.log(this.ipDetail);
    }
    displayName():void {
       console.log(this.UserService.getUserDetails());
    }

    
}
