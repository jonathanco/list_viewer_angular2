import { Router } from '@angular/router';
import { Todolist } from './todolist';
import { Item } from './item';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({  
  template: `
  <section class="todoapp">
   <app-td-header [title]="title" ></app-td-header>
   <app-td-list></app-td-list>
   <app-td-footer></app-td-footer>
  </section>
  `
})
export class TodolistComponent  {
  
  public title: string;
  
  constructor(route:ActivatedRoute) {       
    this.title = "TODOS";

    route.params.subscribe( param => console.log(param) )            
  }

}
