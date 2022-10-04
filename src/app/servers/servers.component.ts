import {Component, OnInit} from '@angular/core';

@Component({
  /** select by component*/
  // selector: 'app-servers',
  /** select by div*/
  // selector: '[app-servers]',
  /** select by class*/
  selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`
  templateUrl: 'servers.component.html',
  styleUrls: ['servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  name = 'Default server name';
  isCreated = false;
  servers = ['testServer', 'testServer 2'];

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServer = !this.allowNewServer;
    // }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.isCreated = true;
    this.servers.push(this.name);
  }

  onUpdateServerName(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;
    // console.log(event);
  }
}
