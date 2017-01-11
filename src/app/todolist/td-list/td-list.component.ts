import { Item } from './../item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-td-list',
  template: `
    <section class="main">
      <app-td-toggle></app-td-toggle>
      <app-td-items></app-td-items>
    </section>      
  `,
  
})
export class TdListComponent {
  
}
