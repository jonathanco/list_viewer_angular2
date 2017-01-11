import { Router } from '@angular/router';
import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {CustomValidators} from "./custom-validators";

@Component({  
  template: `
    <form [formGroup]="loginForm" 
          (ngSubmit)="login()"
          class="login-form">
                              
          <input type="text"
                 name="username"                 
                 formControlName="username"
                 placeholder="username">
                                                                                                                                              
          <input type="password"
                 name="password"
                 formControlName="password"
                 placeholder="password">
                                  
      <button type="submit">Login</button>
    </form>    
  `,
})

export class LoginComponent {

  public loginForm: FormGroup;
  public username: FormControl;
  public password: FormControl;
  public router:Router;

  constructor(router:Router) {
    this.router = router;
    this.username = new FormControl('', Validators.compose([
      CustomValidators.noSpace,
      CustomValidators.isNir
    ]));
    
    this.password = new FormControl('');

    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  public login() {
    this.router.navigate(['list']);
    console.log(this.loginForm);
  }
}
