import {Component, OnInit} from '@angular/core';
import {SkinService} from '../../../services/skin.service';
import {Skin} from '../../../model/skin/skin';
import {Chart} from './chart';
import {SKIN_INTERESTS, SKIN_LEVEL} from '../../../services/mock-skins';


@Component({
  selector: 'app-skins-comparing',
  templateUrl: './skins-comparing.component.html',
  styleUrls: ['./skins-comparing.component.css']
})
export class SkinsComparingComponent implements OnInit {
  skins: Skin[];
  public chartSkinTrend: Chart;
  public chartSkinLevelInterest: Chart;

  public chartClicked(): void {}
  public chartHovered(): void {}


  constructor(private skinService: SkinService) {}

  ngOnInit() {
    this.createSkins();
    this.buildChartTrend();
    this.buildChartLevelInterest();
  }

  buildChartLevelInterest() {
    this.chartSkinLevelInterest = new Chart('Skins', 'bar');
    this.chartSkinLevelInterest.labels = this.skins.map(skin => skin.name);
    const interestDatas = this.skins.map(skin => skin.interest.value);
    const levelDatas = this.skins.map(skin => skin.level.value);
    this.chartSkinLevelInterest.colors = [{
      backgroundColor: '#80ff6b'
    },
      {
        backgroundColor: '#ff695f'
      }];
    this.chartSkinLevelInterest.datas = [
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
    this.chartSkinLevelInterest.option = {
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
              const levelFind = SKIN_LEVEL.find(level => level.value === value);
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
              const interestFind = SKIN_INTERESTS.find(interest => interest.value === value);
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
    this.chartSkinTrend = new Chart('Skins Trend', 'line');
    this.chartSkinTrend.labels = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre'
      , 'Octobre', 'Novembre', 'Decembre'];
    this.chartSkinTrend.datas = this.skins.map(skin => ({
      data: Array.from({length: 12}, () => Math.floor(Math.random() * 5000)),
      label: skin.name
    }));
    this.chartSkinTrend.option = {
      'responsive': true
    };
    this.chartSkinTrend.colors = this.skins.map(() => {
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

  createSkins() {
    this.skinService.getSkins().subscribe(skins => (this.skins = skins));
  }
  private getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }


}
