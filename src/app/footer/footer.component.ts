import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
email = 'a.poichet@gmail.com';
phoneNumber = '0630195020';
  constructor() { }

  ngOnInit() {
  }

}
