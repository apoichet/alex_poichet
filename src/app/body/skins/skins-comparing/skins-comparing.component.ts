import { Component, OnInit } from '@angular/core';
import { SkinService } from '../../../services/skin.service';
import { Skin } from '../../../entities/skin';
import { element } from 'protractor';

@Component({
  selector: 'app-skins-comparing',
  templateUrl: './skins-comparing.component.html',
  styleUrls: ['./skins-comparing.component.css']
})
export class SkinsComparingComponent implements OnInit {
  skins: Skin[];
  public chartData: number[];
  public chartLabels: string[];
  public chartType = 'polarArea';
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

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void {}
  public chartHovered(e: any): void {}


  constructor(private skinService: SkinService) {}

  ngOnInit() {
    this.createSkins();
    this.chartLabels = this.skins.map(skin => skin.name);
    this.chartData = this.skins.map(skin => skin.trend);
  }

  createSkins() {
    this.skinService.getSkins().subscribe(skins => (this.skins = skins));
  }


}
