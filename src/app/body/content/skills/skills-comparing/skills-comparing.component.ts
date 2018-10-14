import {Component, OnInit} from '@angular/core';
import {SkillService} from '../../../../services/skill.service';
import {Skill} from '../../../../model/skill/skill';
import {Chart} from './chart';
import {SKILL_INTERESTS, SKILL_LEVEL, SKILLS} from '../../../../services/mock-skills';


@Component({
  selector: 'app-skills-comparing',
  templateUrl: './skills-comparing.component.html',
  styleUrls: ['./skills-comparing.component.css']
})
export class SkillsComparingComponent implements OnInit {
  skills: Skill[];
  showCharts: Boolean;
  chartSkillsTrend: Chart;
  chartSkillsLevelInterest: Chart;
  numberSkillsInit = 2;

  public chartClicked(): void {}
  public chartHovered(): void {}

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.showCharts = true;
    this.createSkills();
    this.buildChartTrend();
    this.buildChartLevelInterest();
    this.skillService.loadSkills.subscribe(skillsLoaded => {
      if (skillsLoaded && skillsLoaded.length > 0) {
        this.skills = skillsLoaded;
        this.buildChartTrend();
        this.buildChartLevelInterest();
        this.showCharts = true;
      } else {
        this.showCharts = false;
      }
    });
  }

  buildChartLevelInterest() {
    const colorLevel = '#52a344';
    const colorInterest = '#953d38';
    const axisFontSize = 15;
    this.chartSkillsLevelInterest = new Chart('Skills', 'bar');
    this.chartSkillsLevelInterest.labels = this.skills.map(skill => skill.name);
    const interestDatas = this.skills.map(skill => skill.interest.value);
    const levelDatas = this.skills.map(skill => skill.level.value);
    this.chartSkillsLevelInterest.colors = [{
      backgroundColor: colorLevel
    },
      {
        backgroundColor: colorInterest
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
      legend: {
        labels: {
          padding: 20,
          fontSize: 20
        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            drawOnChartArea: false
          },
          id: 'Level',
          type: 'linear',
          position: 'left',
          ticks: {
            fontSize: axisFontSize,
            fontColor: colorLevel,
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
            fontSize: axisFontSize,
            fontColor: colorInterest,
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
      responsive: true,
      legend: {
        labels: {
          padding: 20,
          fontSize: 20
        }
      },
      elements: {
        line: {
          tension: 0, // disables bezier curves
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            min: 0
          }
        }]
      }
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
    this.skillService.getSkills().subscribe(skills => (this.skills = skills.slice(0, this.numberSkillsInit)));
  }

  private getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
