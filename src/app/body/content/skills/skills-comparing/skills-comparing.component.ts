import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SkillService} from '../../../../services/skill.service';
import {Skill} from '../../../../model/skill/skill';
import {Chart} from './chart';
import {SKILL_INTERESTS, SKILL_LEVEL} from '../../../../services/mock-skills';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-skills-comparing',
  templateUrl: './skills-comparing.component.html',
  styleUrls: ['./skills-comparing.component.css']
})
export class SkillsComparingComponent implements OnInit, AfterViewInit {
  skills: Skill[];
  chartSkillsTrend: Chart;
  chartSkillsLevelInterest: Chart;

  isShowChart(){
    return this.skills && this.skills.length > 0;
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  constructor(private skillService: SkillService, private cdRef : ChangeDetectorRef) {}

  ngOnInit(): void {
      this.skillService.loadSkills.subscribe(skillsLoaded => {
        this.skills = skillsLoaded;
        if (this.isShowChart()){
          this.buildChartLevelInterest();
          this.buildChartTrend();
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

  private getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
}
