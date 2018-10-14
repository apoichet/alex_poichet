import {Component, OnInit} from '@angular/core';
import {SkillService} from '../../../services/skill.service';

@Component({
  selector: 'app-skills-extension',
  templateUrl: './skills-extension.component.html',
  styleUrls: ['./skills-extension.component.css']
})
export class SkillsExtensionComponent implements OnInit {

  selectSwitchLabel: String;
  allSkillSelected: Boolean;
  skillsName: String[];
  skillsNameSelected: String[];

  constructor(private skillService: SkillService) { }

  loadSkills() {
    this.skillService.filterSkills(this.skillsNameSelected);
  }

  initSkills() {
    this.skillsNameSelected = [];
    this.skillService.getSkills().subscribe(skills => (this.skillsName = skills.map(skill => skill.name)));
  }

  switchLabel() {
    this.selectSwitchLabel = this.allSkillSelected ? 'Deselect All' : 'Select All';
  }

  selectSkill(skillCheck: HTMLInputElement) {
    if (skillCheck.checked) {
      this.skillsNameSelected.push(skillCheck.id);
    } else {
      const skillCheckIndex = this.skillsNameSelected.findIndex(name => name === skillCheck.id);
      this.skillsNameSelected.splice(skillCheckIndex, 1);
    }
  }

  selectSwitch() {
    this.allSkillSelected = !this.allSkillSelected;
    this.switchLabel();
    if (this.allSkillSelected) {
      this.skillsNameSelected = this.skillsName.slice();
    } else {
      this.skillsNameSelected = [];
    }
  }

  ngOnInit() {
    this.initSkills();
    this.switchLabel();
  }

}
