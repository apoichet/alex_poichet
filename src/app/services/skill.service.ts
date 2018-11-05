import {EventEmitter, Injectable, Output} from '@angular/core';
import {ISkill} from '../shared/skill/skill';
import {SKILLS} from './mock-skills';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: ISkill[];

  @Output() loadSkills = new EventEmitter<ISkill[]>();

  getSkill(name: string): Observable<ISkill> {
    return of(SKILLS.find(skill => skill.name === name));
  }

  filterSkills(names: String[]) {
    const skillsFiltered =  SKILLS.filter(skill => names.includes(skill.name));
    this.loadSkills.emit(skillsFiltered);
  }

  getSkills(): Observable<ISkill[]> {
    return of(SKILLS);
  }

  constructor() { }
}
