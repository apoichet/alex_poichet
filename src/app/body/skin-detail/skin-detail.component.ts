import { Component, OnInit, Input } from '@angular/core';
import { Skin } from '../skins/skin';

@Component({
  selector: 'app-skin-detail',
  templateUrl: './skin-detail.component.html',
  styleUrls: ['./skin-detail.component.css']
})
export class SkinDetailComponent implements OnInit {

  @Input() skin: Skin;

  constructor() { }

  ngOnInit() {
  }

}
