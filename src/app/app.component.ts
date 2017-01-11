import { async } from '@angular/core/testing';
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `
    <a [routerLink]="['login']">login</a>
    <a [routerLink]="['list']">list</a>

    <router-outlet></router-outlet>                                
   `,
})

export class AppComponent  {

  constructor() {}

}
