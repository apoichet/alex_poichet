import {EventEmitter, Injectable, Output} from '@angular/core';
import { Skill } from '../model/skill/skill';
import { SKILLS } from './mock-skills';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[];

  @Output() loadSkills = new EventEmitter<Skill[]>();

  getSkill(name: string): Observable<Skill> {
    this.messageService.add(`SkillService: fetched skill ${name}`);
    return of(SKILLS.find(skill => skill.name === name));
  }

  filterSkills(names: String[]) {
    const skillsFiltered =  SKILLS.filter(skill => names.includes(skill.name));
    this.loadSkills.emit(skillsFiltered);
  }

  getSkills(): Observable<Skill[]> {
    return of(SKILLS);
  }

  constructor(private messageService: MessageService) { }
}
