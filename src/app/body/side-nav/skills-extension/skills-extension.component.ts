import { Component, OnInit } from '@angular/core';
import {SkillService} from '../../../services/skill.service';
import {Skill} from '../../../model/skill/skill';

@Component({
  selector: 'app-skills-extension',
  templateUrl: './skills-extension.component.html',
  styleUrls: ['./skills-extension.component.css']
})
export class SkillsExtensionComponent implements OnInit {

  selectSwitchLabel: String;
  allSkillSelected: Boolean;
  skills: Skill[];

  constructor(private skillService: SkillService) { }

  createSkills() {
    this.skillService.getSkills().subscribe(skills => (this.skills = skills));
  }

  switchLabel() {
    this.selectSwitchLabel = this.allSkillSelected ? 'Deselect All' : 'Select All';
  }

  selectSwitch() {
    this.allSkillSelected = !this.allSkillSelected;
    this.switchLabel();
  }

  selectSkill(checked: HTMLInputElement) {
    console.log(checked.id);
  }

  ngOnInit() {
    this.createSkills();
    this.switchLabel();
  }

}
