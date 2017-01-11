import { Item } from './../item';
import { Todolist } from './../todolist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-input',
  template: `     
    <input class="new-todo"
           #input                      
           placeholder="text"
           (keydown.enter)="list.addItem(input.value)"
           autofocus>
  `  
})

export class TdInputComponent {
  constructor(private list: Todolist) {}  
}
