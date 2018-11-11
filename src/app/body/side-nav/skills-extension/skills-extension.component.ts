import {Component, OnInit} from '@angular/core';
import {SkillService} from '../../../services/skill.service';
import {SkillExtension} from './skill-extension';
import {ISkill} from '../../../shared/skill/skill';

@Component({
  selector: 'app-skills-extension',
  templateUrl: './skills-extension.component.html',
  styleUrls: ['./skills-extension.component.css']
})
export class SkillsExtensionComponent implements OnInit {

  selectSwitchLabel: String;
  allSkillSelected: Boolean;
  skills: ISkill[];
  skillsExtension: SkillExtension[];
  numberSkillsInit = 2;

  constructor(private skillService: SkillService) { }

  async ngOnInit() {
    this.skills = await this.skillService.load();
    this.skillsExtension =  this.skills.map((skill, index) => new SkillExtension(skill, index < this.numberSkillsInit));
    this.switchLabel();
    this.loadSkills();
  }

  switchLabel() {
    this.selectSwitchLabel = this.allSkillSelected ? 'Deselect All' : 'Select All';
  }

  selectSwitch() {
    this.allSkillSelected = !this.allSkillSelected;
    this.skillsExtension.forEach(skillExt => skillExt.checked = this.allSkillSelected);
    this.switchLabel();
    this.loadSkills();
  }

  sortSkills() {
    return this.skillsExtension.sort((skill1, skill2) => skill1.checked === skill2.checked ?
      skill1.skill.name.localeCompare(skill2.skill.name) : skill1.checked ? -1 : 1);
  }

  loadSkills() {
    const skillsNameSelected = this.skillsExtension.filter(skillExt => skillExt.checked).map(skillExt => skillExt.skill.name);
    this.skillService.filterSkills(this.skills, skillsNameSelected);
  }

  onSkillSelected(check: Boolean, skillExtension: SkillExtension){
    skillExtension.checked = check;
    this.loadSkills();
  }
}
