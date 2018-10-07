import {Component, OnInit} from '@angular/core';
import {Skill} from '../../../../model/skill/skill';
import {SkillService} from '../../../../services/skill.service';

import {SkillLevelEnum} from '../../../../model/skill/skillLevelEnum';
import {SkillInterestEnum} from '../../../../model/skill/skillInterestEnum';
import {SkillOverview} from './skill-overview';
import {Chart} from '../skills-comparing/chart';

@Component({
  selector: 'app-skills-overview',
  templateUrl: './skills-overview.component.html',
  styleUrls: ['./skills-overview.component.css']
})
export class SkillsOverviewComponent implements OnInit {
  skills: SkillOverview[];
  skillSearch: String;
  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.createSkills();
  }

  createSkills() {
    this.skillService.getSkills()
      .subscribe(skills =>
        this.skills = skills.map(skill => new SkillOverview(skill, this.buildChartTrend(skill))));
  }

  buildProgressBarLevel(skill: Skill) {
    return skill.level.value * 100 * 2 / Object.keys(SkillLevelEnum).length;
  }

  buildProgressBarInterest(skill: Skill) {
    return skill.interest.value * 100 * 2 / Object.keys(SkillInterestEnum).length;
  }

  buildChartTrend(skill: Skill) {
    const chart = new Chart(skill.name, 'line');
    chart.labels = ['Septembre', 'Octobre', 'Novembre', 'Décembre'];
    chart.datas = [
      {label: skill.name,
        data: Array.from({length: 4}, () => Math.floor(Math.random() * 5000)),
        pointRadius: 1
      }
    ];
    chart.colors = [{
      backgroundColor: '#0d47a1',
      fill: false,
      borderColor: '#0d47a1'
    }];
    chart.option = {
      responsive: true,
      offsetGridLines: false,
      elements: {
        line: {
          tension: 0,
        }
      },
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      }
    };
    return chart;
  }

  search() {
    if (!this.skillSearch) {
      return this.skills;
    }
    if (this.skillSearch) {
      return this.filterSkill(this.skills, this.skillSearch);
    }
  }

  filterSkill(arr, searchKey) {
    return arr.filter((obj) => {
      return Object.keys(obj['skill']).some((key) => {
        return obj['skill'][key].toString().includes(searchKey);
      });
    });
  }
}
