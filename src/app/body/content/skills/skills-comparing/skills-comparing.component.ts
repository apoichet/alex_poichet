import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SkillService} from '../../../../services/skill.service';
import {Skill} from '../../../../shared/skill/skill';
import {Chart} from '../../../../shared/chart';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-skills-comparing',
  templateUrl: './skills-comparing.component.html',
  styleUrls: ['./skills-comparing.component.css']
})
export class SkillsComparingComponent implements OnInit, AfterViewInit {
  skills: Skill[];
  chartLineTrend: Chart;
  chartDoughnutTrend: Chart;
  chartBarTrend: Chart;

  constructor(private skillService: SkillService, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {
    this.skillService.loadSkills.subscribe(skillsLoaded => {
      this.skills = skillsLoaded;
      if (this.isShowChart()) {
        this.buildChartBarTrend();
        this.buildChartDougnhutTrend();
        this.buildChartLineTrend();
      }
    });
  }

  isShowChart() {
    return this.skills && this.skills.length > 0;
  }

  buildChartLineTrend() {
    this.chartLineTrend = new Chart('Trending Chronolgy', 'line');
    this.chartLineTrend.labels = this.skills[0].trendDatas.map(trend => trend.date);
    this.chartLineTrend.datas = this.skills.map(skill => {
      const chart = new SkillMultipleDataChart();
      chart.data = skill.trendDatas.map(trend => trend.value[0]);
      chart.borderColor = skill.color;
      chart.fill = false;
      chart.label = skill.name;
      return Object.assign(chart);
    });
    this.chartLineTrend.colors = this.skills.map(skill => skill.color);
    this.chartLineTrend.option = {
      animation: false,
      responsive: true,
      offsetGridLines: false,
      elements: {
        line: {
          tension: 0.1,
        }
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            unit: 'day',
            unitStepSize: 100,
            displayFormats: {
              'month': 'MMM DD'
            }
          }
        }],
        yAxes: [{
          ticks: {
            min: 0,
            max: 100
          },
        }]
      }

    };
  }

  buildChartDougnhutTrend() {
    this.chartDoughnutTrend = new Chart('chart trend doughnut', 'doughnut');
    this.chartDoughnutTrend.labels = this.skills.map(skill => skill.name);
    const chart = new SkillSingleDataChart();
    chart.data = this.skills.map(skill => skill.calculTrendAverage());
    chart.label = 'Dougnhut';
    chart.backgroundColor = this.skills.map(skill => skill.color);
    this.chartDoughnutTrend.datas = Array.of(Object.assign(chart));
    this.chartDoughnutTrend.colors = chart.backgroundColor;
    this.chartDoughnutTrend.option = {
      animation: false,
      responsive: true
    };
  }

  buildChartBarTrend() {
    this.chartBarTrend = new Chart('chart trend bar', 'bar');
    this.chartBarTrend.labels = this.skills.map(skill => skill.name);
    const chart = new SkillSingleDataChart();
    chart.data = this.skills.map(skill => skill.calculTrendAverage());
    chart.label = 'Bar';
    chart.backgroundColor = this.skills.map(skill => skill.color);
    this.chartBarTrend.datas = Array.of(Object.assign(chart));
    this.chartBarTrend.colors = chart.backgroundColor;
    this.chartBarTrend.option = {
      animation: false,
      responsive: true,
      offsetGridLines: false,
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
            max: 100
          },
        }]}
    };
  }
}

export class SkillSingleDataChart {
  data: Array<any>;
  label: any;
  backgroundColor: String[];
}

export class SkillMultipleDataChart {
  data: Array<any>;
  label: any;
  borderColor: String;
  fill: Boolean;
}
