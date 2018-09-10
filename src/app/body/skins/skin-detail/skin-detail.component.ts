import { Component, OnInit } from '@angular/core';
import { Skin } from '../skin';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkinService } from '../skin.service';

@Component({
  selector: 'app-skin-detail',
  templateUrl: './skin-detail.component.html',
  styleUrls: ['./skin-detail.component.css']
})
export class SkinDetailComponent implements OnInit {
  skin: Skin;

  constructor(
    private skinService: SkinService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getSkin(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.skinService.getSkin(name).subscribe(skin => this.skin = skin);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getSkin();
  }
}
