import { Component } from '@angular/core';
import {User} from './entities/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _user: User = new User('Poichet', 'Alexandre');

  get user(): User {
    return this._user;
  }
}
