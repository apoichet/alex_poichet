import { Component, OnInit } from '@angular/core';
import { Skin } from '../../../entities/skin';
import { SkinService } from '../../../services/skin.service';

@Component({
  selector: 'app-skins-overview',
  templateUrl: './skins-overview.component.html',
  styleUrls: ['./skins-overview.component.css']
})
export class SkinsOverviewComponent implements OnInit {
  skins: Skin[];

  constructor(private skinService: SkinService) {}

  ngOnInit() {
    this.createSkins();
  }

  createSkins() {
    this.skinService.getSkins().subscribe(skins => (this.skins = skins));
  }
}
