import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
  myForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private fb: FormBuilder) {
    //this.email = fb.control('',Validators.required);
    this.email = fb.control('', Validators.compose([
      Validators.required,
      Register2Component.emailValidator,
      Register2Component.adminValidator
    ]));

    this.password = fb.control('', Validators.compose([
      Validators.required, 
      Validators.minLength(3)
    ]));

    this.myForm = fb.group({
      'email': this.email,
      'password': this.password
    });
  }

  static adminValidator(control: FormControl) {
    return control.value !== 'admin@gmail.com' ? null : { notAllowed: true };
  }

  static emailValidator(control: FormControl) {
    let email_regxp: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_regxp.test(control.value) ? null : { invalidEmail: true };
  }

  ngOnInit() {
  }

  register(): void {
    console.log(this.myForm.value);
    console.log(this.myForm.controls['email'].value);
    console.log(this.myForm.controls['password'].value);
  }

}
