import { Injectable } from '@angular/core';
import { Skill } from '../model/skill/skill';
import { SKILLS } from './mock-skills';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  getSkill(name: string): Observable<Skill> {
    this.messageService.add(`SkillService: fetched skill ${name}`);
    return of(SKILLS.find(skill => skill.name === name));
  }

  getSkills(): Observable<Skill[]> {
    this.messageService.add('SkillService: fetched skills');
    return of(SKILLS);
  }

  constructor(private messageService: MessageService) { }
}
