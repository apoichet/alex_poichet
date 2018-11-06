import {Component, OnInit} from '@angular/core';
import {SkillService} from '../../../services/skill.service';
import {SkillExtension} from './skill-extension';

@Component({
  selector: 'app-skills-extension',
  templateUrl: './skills-extension.component.html',
  styleUrls: ['./skills-extension.component.css']
})
export class SkillsExtensionComponent implements OnInit {

  selectSwitchLabel: String;
  allSkillSelected: Boolean;
  skillsExtension: SkillExtension[];
  numberSkillsInit = 2;

  constructor(private skillService: SkillService) { }

  loadSkills() {
    const skillsNameSelected = this.skillsExtension.filter(skillExt => skillExt.checked).map(skillExt => skillExt.skill.name);
    this.skillService.filterSkills(skillsNameSelected);
  }
  initSkills() {
    this.skillService.getSkills().subscribe(skills =>
      this.skillsExtension =  skills.map((skill, index) => new SkillExtension(skill, index < this.numberSkillsInit)));
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

  onSkillSelected(check: Boolean, skillExtension: SkillExtension){
    skillExtension.checked = check;
    this.loadSkills();
  }

  ngOnInit() {
    this.initSkills();
    this.loadSkills();
    this.switchLabel();
  }

}
