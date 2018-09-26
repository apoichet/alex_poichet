import {Component, OnInit} from '@angular/core';
import {SkinService} from '../../../services/skin.service';
import {Skin} from '../../../entities/skin';
import {Chart} from './chart';


@Component({
  selector: 'app-skins-comparing',
  templateUrl: './skins-comparing.component.html',
  styleUrls: ['./skins-comparing.component.css']
})
export class SkinsComparingComponent implements OnInit {
  skins: Skin[];
  public chartSkinTrend: Chart;
  public chartSkinLevelInterest: Chart;

  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}


  constructor(private skinService: SkinService) {}

  ngOnInit() {
    this.createSkins();
    this.buildChartTrend();
    this.buildChartLevelInterest()
  }

  buildChartLevelInterest(){
    this.chartSkinLevelInterest = new Chart('Skins', 'bar');
    this.chartSkinLevelInterest.labels = this.skins.map(skin => skin.name);
    const interestDatas = this.skins.map(skin => skin.interest);
    const interestDatasColor = this.skins.map(skin => '#7FFF00');
    const levelDatas = this.skins.map(skin => skin.level);
    const levelDatasColor = this.skins.map(skin => '#ff1315');
    this.chartSkinLevelInterest.datas = [
      {
        label: 'Level',
        backgroundColor: levelDatasColor,
        data: levelDatas
      },
      {
        label: 'Interest',
        backgroundColor: interestDatasColor,
        data: interestDatas
      }
    ];

    this.chartSkinLevelInterest.option = {
      'responsive': true
    }
  }


  buildChartTrend(){
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
    this.chartSkinTrend.colors = this.skins.map(skin => {
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
