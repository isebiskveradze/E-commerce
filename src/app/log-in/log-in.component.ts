import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;


  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(6), CustomValidationService.customEmailValidator]),
      password: new FormControl(null, Validators.required)
    });
    // console.log(this.loginForm)

  }
  onSubmit() {

    console.log(this.loginForm);
    console.log(this.loginForm.controls.username.value);
    console.log(this.loginForm.controls.password.value);
    // if (this.loginForm.invalid) {
    //   alert('form invalid');
    //   return;
    // }



  }

getUserbaneErrorMessage(){
  const usernameControl = this.loginForm.get('username');
  if(usernameControl.errors.required){
    return 'username is required'
  }else if(usernameControl.errors.minlength){
    return `you need to enter ${usernameControl.errors.minlength.requiredLength} characters`
  }else if(usernameControl.errors.customEmailValidation){
    return 'please enter valid email'
  }
  // let number = 5;
  // switch (number) {
  //   case 5:
  //     console.log('number is 5')
      
  //     break;
  //     case 6:
  //       console.log('number is 6')
  
  //   default:
  //     break;
  // }

}

}
