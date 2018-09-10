import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { SKINS } from './mock-skins';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../footer/messages.service';

@Injectable({
  providedIn: 'root'
})
export class SkinService {

  getSkin(name: string): Observable<Skin> {
    this.messageService.add(`SkinService: fetched skin ${name}`);
    return of(SKINS.find(skin => skin.name === name));
  }

  getSkins(): Observable<Skin[]> {
    this.messageService.add('SkinService: fetched skins');
    return of(SKINS);
  }

  constructor(private messageService: MessageService) { }
}
