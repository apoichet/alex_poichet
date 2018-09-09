import { Component, OnInit } from '@angular/core';
import { Skin } from './skin';
import { SkinService } from '../skin.service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css']
})
export class SkinsComponent implements OnInit {
  skins: Skin[];
  selectedSkin: Skin;

  constructor(private skinService: SkinService) { }

  ngOnInit() {
    this.createSkins();
  }

  createSkins() {
    this.skinService.getSkins()
    .subscribe(skins => this.skins = skins);
  }

  onSelect(skin: Skin) {
    this.selectedSkin = skin;
  }

}
