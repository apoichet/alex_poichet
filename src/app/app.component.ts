import { Component } from '@angular/core';
import {User} from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _user: User = new User('Poichet', 'Alexandre', 'a.poichet@gmail.com', 'Développeur Web');
  get user(): User {
    return this._user;
  }
}
