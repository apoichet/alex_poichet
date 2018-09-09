import { Injectable } from '@angular/core';
import { Skin } from './skins/skin';
import { SKINS } from './mock-skins';
import { Observable, of } from 'rxjs';
import { MessageService } from '../footer/messages.service';

@Injectable({
  providedIn: 'root'
})
export class SkinService {

  getSkins(): Observable<Skin[]> {
    this.messageService.add('SkinService: fetched skins');
    return of(SKINS);
  }

  constructor(private messageService: MessageService) { }
}
