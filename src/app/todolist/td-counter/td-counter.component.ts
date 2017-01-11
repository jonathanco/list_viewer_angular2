import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-td-counter',
  template: `
    <span class="todo-count">
      <strong>{{ value }}</strong>
      item left
    </span>
  `
})
export class TdCounterComponent  {

  @Input() value: number;



}
