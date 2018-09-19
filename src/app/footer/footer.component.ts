import {Component, Input, OnInit} from '@angular/core';
import {User} from '../entities/user';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
