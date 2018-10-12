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
  selectAll: Boolean;
  skills: Skill[];

  constructor(private skillService: SkillService) { }

  createSkills() {
    this.skillService.getSkills().subscribe(skills => (this.skills = skills));
  }

  selectSwitch(){
    console.log(this.selectAll);
    this.selectAll = !this.selectAll;
    this.selectSwitchLabel = this.selectAll ? 'Select All' : 'Deselect All';
  }

  ngOnInit() {
    this.selectSwitch();
    this.createSkills();
  }

}
