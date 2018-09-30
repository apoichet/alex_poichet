import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '18%',
      })),
      state('close', style({
        width: '0',
      })),
      transition('open => close', [
        animate('0s')
      ]),
      transition('close => open', [
        animate('0.5s')
      ]),
    ])
  ]
})
export class SideNavComponent implements OnInit {

  isOpen: Boolean;

  constructor() { }

  toogleNav() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
    this.isOpen = false;
  }



}
