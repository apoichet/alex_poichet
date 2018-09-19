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
  public chartColors = [
    {
      hoverBorderColor: [
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)',
        'rgba(0, 0, 0, 0.1)'
      ],
      hoverBorderWidth: 0,
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: [
        '#FF5A5E',
        '#5AD3D1',
        '#FFC870',
        '#A8B3C5',
        '#616774'
      ]
    }
  ];
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}


  constructor(private skinService: SkinService) {}

  ngOnInit() {
    this.createSkins();
    this.chartSkinTrend = new Chart('Skin Trend', 'line');
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
