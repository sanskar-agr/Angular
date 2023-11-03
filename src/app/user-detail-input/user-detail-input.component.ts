import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail-input',
  templateUrl: './user-detail-input.component.html',
  styleUrls: ['./user-detail-input.component.css']
})
export class UserDetailInputComponent {
  Profile=new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  })
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.Profile.value);
  }
  Email = new FormControl('something@accolitedigital.com');

  updateEmail():void{
      this.Email.setValue("sanskar.agrawal@accolitedigital.com")
  }
}
