import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <p>
      info Component works!
    </p>
  `,
  styles: []
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
