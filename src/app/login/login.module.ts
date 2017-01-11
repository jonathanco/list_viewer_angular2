import { routes } from './../app.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  declarations: [LoginComponent, InfoComponent],
  exports: [LoginComponent]
})
export class LoginModule { }
