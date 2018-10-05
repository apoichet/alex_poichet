import {Component, OnInit} from '@angular/core';
import {SkillService} from '../../../../services/skill.service';
import {Skill} from '../../../../model/skill/skill';
import {Chart} from './chart';
import {SKILL_INTERESTS, SKILL_LEVEL} from '../../../../services/mock-skills';


@Component({
  selector: 'app-skills-comparing',
  templateUrl: './skills-comparing.component.html',
  styleUrls: ['./skills-comparing.component.css']
})
export class SkillsComparingComponent implements OnInit {
  skills: Skill[];
  public chartSkillsTrend: Chart;
  public chartSkillsLevelInterest: Chart;

  public chartClicked(): void {}
  public chartHovered(): void {}


  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.createSkills();
    this.buildChartTrend();
    this.buildChartLevelInterest();
  }

  buildChartLevelInterest() {
    this.chartSkillsLevelInterest = new Chart('Skills', 'bar');
    this.chartSkillsLevelInterest.labels = this.skills.map(skill => skill.name);
    const interestDatas = this.skills.map(skill => skill.interest.value);
    const levelDatas = this.skills.map(skill => skill.level.value);
    this.chartSkillsLevelInterest.colors = [{
      backgroundColor: '#80ff6b'
    },
      {
        backgroundColor: '#ff695f'
      }];
    this.chartSkillsLevelInterest.datas = [
      {
        label: 'Level',
        yAxisID: 'Level',
        data: levelDatas
      },
      {
        label: 'Interest',
        yAxisID: 'Interest',
        data: interestDatas
      }
    ];
    this.chartSkillsLevelInterest.option = {
      responsive: true,
      offsetGridLines: false,
      scales: {
        yAxes: [{
          gridLines: {
            drawOnChartArea: false
          },
          id: 'Level',
          type: 'linear',
          position: 'left',
          ticks: {
            callback: function(value) {
              const levelFind = SKILL_LEVEL.find(level => level.value === value);
              return levelFind ? levelFind.label : '';
            },
            beginAtZero: true,
            stepSize: 1,
            max: 4
          }
        }, {
          gridLines: {
            drawOnChartArea: false
          },
          id: 'Interest',
          type: 'linear',
          position: 'right',
          ticks: {
            callback: function(value) {
              const interestFind = SKILL_INTERESTS.find(interest => interest.value === value);
              return interestFind ? interestFind.label : '';
            },
            beginAtZero: true,
            stepSize: 1,
            max: 4
          }
        }],
        xAxes: [{
          gridLines: {
            drawOnChartArea: false
          },
        }]
      }
    };
  }


  buildChartTrend() {
    this.chartSkillsTrend = new Chart('Skills Trend', 'line');
    this.chartSkillsTrend.labels = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre'
      , 'Octobre', 'Novembre', 'Decembre'];
    this.chartSkillsTrend.datas = this.skills.map(skill => ({
      data: Array.from({length: 12}, () => Math.floor(Math.random() * 5000)),
      label: skill.name
    }));
    this.chartSkillsTrend.option = {
      'responsive': true
    };
    this.chartSkillsTrend.colors = this.skills.map(() => {
      const randomColor = this.getRandomColor();
      return {
        fill: false,
        backgroundColor: randomColor,
        borderColor: randomColor,
        borderWidth: 2,
        pointBackgroundColor: randomColor,
        pointBorderColor: randomColor,
        pointHoverBackgroundColor: randomColor,
        pointHoverBorderColor: randomColor
      };
    });
  }

  createSkills() {
    this.skillService.getSkills().subscribe(skills => (this.skills = skills));
  }
  private getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }


}
