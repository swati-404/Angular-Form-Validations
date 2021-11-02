import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'fname':new FormControl("",[Validators.required,
                               Validators.minLength(3),Validators.maxLength(15),
                               Validators.pattern('[a-zA-Z ]*')]),
      'lname': new FormControl("",[Validators.required,
                              Validators.minLength(3),Validators.maxLength(15),
                              Validators.pattern('[a-zA-Z ]*')]),
      'bday': new FormControl("", Validators.required),
      'gender': new FormControl("",Validators.required),
      'city': new FormControl("",Validators.required),
      'email': new FormControl("", [Validators.required, Validators.email]),
      'phoneNumber': new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(12)])
    })
  }
  get f() { return this.signupForm.controls; }

  clickbtn (){
    console.log(this.signupForm.value)
    this.signupForm.reset();
  }


}
