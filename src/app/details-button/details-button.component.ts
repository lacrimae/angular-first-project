import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-button',
  templateUrl: './details-button.component.html',
  styleUrls: ['./details-button.component.css']
})
export class DetailsButtonComponent implements OnInit {
  readonly AMOUNT_OF_CLICKS: number = 1;
  canShow = false;
  timestamps: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.canShow = true;
    setTimeout(() => {
      this.canShow = false;
    }, 2000);
    this.logTime();
  }

  logTime() {
    let date = new Date();
    this.timestamps.push(date.toString());
  }
}
