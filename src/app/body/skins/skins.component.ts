import { Component, OnInit } from '@angular/core';
import { Skin } from '../../entities/skin';
import { SkinService } from '../../services/skin.service';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.scss']
})
export class SkinsComponent implements OnInit {
  skins: Skin[];

  constructor(private skinService: SkinService) { }

  ngOnInit() {
    this.createSkins();
  }

  createSkins() {
    this.skinService.getSkins()
    .subscribe(skins => this.skins = skins);
  }

}
