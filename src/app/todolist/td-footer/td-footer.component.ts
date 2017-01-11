import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-td-footer',
  template: `
  <footer class="footer">    
    <app-td-counter></app-td-counter>
    <button class="clear-completed">Clear completed</button>
  </footer>
    
  `  
})
export class TdFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
