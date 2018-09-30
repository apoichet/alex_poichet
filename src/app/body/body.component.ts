import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  hasExtension: Boolean;
  constructor() { }

  toggle() {
    this.hasExtension = !this.hasExtension;
  }

  ngOnInit() {
    this.hasExtension = false;
  }

}
