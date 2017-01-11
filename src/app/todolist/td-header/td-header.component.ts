import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-td-header',
  template: `
    <header class="header">    
      <h1>{{ title }}</h1>
      <app-td-input></app-td-input>   
    </header>  
  `,
})
export class TdHeaderComponent {
  
  @Input()  
  public title: string;

}
