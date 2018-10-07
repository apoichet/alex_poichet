import {Component, OnInit} from '@angular/core';
import {Skill} from '../../../../model/skill/skill';
import {SkillService} from '../../../../services/skill.service';
import {Chart} from '../skills-comparing/chart';

@Component({
  selector: 'app-skills-overview',
  templateUrl: './skills-overview.component.html',
  styleUrls: ['./skills-overview.component.css']
})
export class SkillsOverviewComponent implements OnInit {
  skills: Skill[];
  skillSearch: String;
  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.createSkills();
  }

  createSkills() {
    this.skillService.getSkills().subscribe(skills => (this.skills = skills));
  }

  filterIt(arr, searchKey) {
    return arr.filter((obj) => {
      return Object.keys(obj).some((key) => {
        return obj[key].toString().includes(searchKey);
      });
    });
  }

  public search() {
    if (!this.skillSearch) {
      return this.skills;
    }
    if (this.skillSearch) {
      return this.filterIt(this.skills, this.skillSearch);
    }
  }
}
