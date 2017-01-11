import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';
import {Routes} from '@angular/router';

export const routes:Routes = [
    { path:'', redirectTo:'login', pathMatch:'full' },
    { path:'login', component: LoginComponent },
    { path:'list',  component: TodolistComponent}
    
];