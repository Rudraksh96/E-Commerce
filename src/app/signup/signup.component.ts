import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupArr: any[] = [];
  signupObj: any = {
    username: '',
  }
  signupForm!: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit() {
    if (this.signupForm.valid) {


      const username = this.signupForm.value.username;
      const password = this.signupForm.value.password;
      localStorage.setItem('user', username);
      localStorage.setItem('pass', password);
      this.toastr.success("Registration Sucessful");
      this.route.navigate(['./login']);


    }
    else {
      console.log("Form is not valid")
      this.validateAllFormFields(this.signupForm);
      this.toastr.error("Please fill correct credentials");
    }
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      }
      else if (control instanceof FormGroup) {
        this.validateAllFormFields(control)
      }
    })
  }
}
