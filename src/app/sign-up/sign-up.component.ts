import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationService } from '../services/custom-validation.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  hide = true;
  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.minLength(6), CustomValidationService.customEmailValidator]),
      password: new FormControl(null, Validators.required),
      hobbies: new FormArray([])
    });
  }

  getHobbiesControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  addHobbies() {
    const formControl = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(formControl);
  }

  onSubmit(){
    console.log(this.signUpForm)
  }

  // onSubmit() {

  //   console.log(this.signUpForm);
  //   console.log(this.signUpForm.controls.username.value);
  //   console.log(this.signUpForm.controls.password.value);
  //   // if (this.signUpForm.invalid) {
  //   //   alert('form invalid');
  //   //   return;
  //   // }



  // }

  // getUserbaneErrorMessage() {
  //   const usernameControl = this.signUpForm.get('username');
  //   if (usernameControl.errors.required) {
  //     return 'username is required'
  //   } else if (usernameControl.errors.minlength) {
  //     return `you need to enter ${usernameControl.errors.minlength.requiredLength} characters`
  //   } else if (usernameControl.errors.customEmailValidation) {
  //     return 'please enter valid email'
  //   }
  //   // let number = 5;
  //   // switch (number) {
  //   //   case 5:
  //   //     console.log('number is 5')

  //   //     break;
  //   //     case 6:
  //   //       console.log('number is 6')

  //   //   default:
  //   //     break;
  //   // }

  // }


}
