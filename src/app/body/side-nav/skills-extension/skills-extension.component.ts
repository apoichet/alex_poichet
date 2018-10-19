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
    const skillsNameSelected = this.skillsExtension.filter(skillExt => skillExt.checked).map(skillExt => skillExt.name);
    this.skillService.filterSkills(skillsNameSelected);
  }
  initSkills() {
    this.skillService.getSkills().subscribe(skills => this.skillsExtension =  skills.map(skill => new SkillExtension(skill.name)));
    // Selectionne les trois premiers
    this.skillsExtension.forEach((skillExt, index) => {if (index <= this.numberSkillsInit) {
      skillExt.checked = true;
    }});
  }

  switchLabel() {
    this.selectSwitchLabel = this.allSkillSelected ? 'Deselect All' : 'Select All';
  }

  selectSkill(skillCheck: HTMLInputElement) {
    this.skillsExtension.filter(skillExt => skillCheck.id === skillExt.name).forEach(skillExt => skillExt.checked = skillCheck.checked);
  }

  selectSwitch() {
    this.allSkillSelected = !this.allSkillSelected;
    this.skillsExtension.forEach(skillExt => skillExt.checked = this.allSkillSelected);
    this.switchLabel();
  }

  ngOnInit() {
    this.initSkills();
    this.loadSkills();
    this.switchLabel();
  }

}
