import {Component, OnInit} from '@angular/core';

@Component({
  /** select by component*/
  // selector: 'app-servers',
  /** select by div*/
  // selector: '[app-servers]',
  /** select by class*/
  selector: '.app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`
})
export class ServersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
