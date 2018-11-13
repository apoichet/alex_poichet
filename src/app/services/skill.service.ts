import {EventEmitter, Injectable, Output} from '@angular/core';
import {ISkill, Skill} from '../shared/skill/skill';
import {SKILLS} from './mock-skills';
import {Observable, of} from 'rxjs';
import {SkillLoaderService} from './skill-loader.service';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[];

  @Output() loadSkills = new EventEmitter<ISkill[]>();

  // Merge getSkills and getSkillsBis !
  async getSkills() {
    if (!this.skills) {
      this.skills = await this.skillLoaderService.load();
    }
    return this.skills;
  }

  getSkill(name: string): Observable<ISkill> {
    return of(SKILLS.find(skill => skill.name === name));
  }

  filterSkills(names: String[]) {
    //const skillsFiltered =  SKILLS.filter(skill => names.includes(skill.name));
    const skillsFiltered =  this.skills.filter(skill => names.includes(skill.name));
    this.loadSkills.emit(skillsFiltered);
  }

  getSkillsBis(): Observable<Skill[]> {
    return of(SKILLS);
    //return of(this.skills);
  }

  constructor(private skillLoaderService: SkillLoaderService) { }
}
