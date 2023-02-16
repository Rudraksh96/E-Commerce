import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // profileInfo = new BehaviorSubject({
  //   username:' '
  // });
  loginObj: any = {
    email: '',
    password: ''
  };
  loginForm!: FormGroup; //declare to login forms by giving the type formgroup
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService) { }//inject formbuilder

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)

      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;


      if (username === sessionStorage.getItem('user') && password === sessionStorage.getItem('pass')) {
        console.log("login sucessful");
        this.toastr.success("Welcome to Home Page");
        this.router.navigate(['./home']);
        // sessionStorage.setItem('isLoggedIn',"true");
        // sessionStorage.setItem('token',this.loginForm.use)
        // this.profileInfo.next({
        //   username:this.loginForm.value.username
        // })
    
        
      }
      else {
        this.toastr.error("Invalid Credentials....Please signup")
      }


    }
    else {
      console.log("Form is not valid")
      this.validateAllFormFields(this.loginForm);
      this.toastr.error("Invalid Credentials....Please signup")


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
