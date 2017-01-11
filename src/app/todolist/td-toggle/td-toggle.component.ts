import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-toggle',
  template: `
    <input class="toggle-all"
           type="checkbox">
  `
})
export class TdToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
