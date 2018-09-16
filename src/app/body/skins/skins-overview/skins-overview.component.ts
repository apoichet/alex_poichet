import { Component, OnInit, HostListener } from '@angular/core';
import { Skin } from '../../../entities/skin';
import { SkinService } from '../../../services/skin.service';

@Component({
  selector: 'app-skins-overview',
  templateUrl: './skins-overview.component.html',
  styleUrls: ['./skins-overview.component.css']
})
export class SkinsOverviewComponent implements OnInit {
  skins: Skin[];
  skinSearch: String;
  public test: String = '';

  constructor(private skinService: SkinService) {}

  ngOnInit() {
    this.createSkins();
  }

  createSkins() {
    this.skinService.getSkins().subscribe(skins => (this.skins = skins));
  }

  filterIt(arr, searchKey) {
    return arr.filter((obj) => {
      return Object.keys(obj).some((key) => {
        return obj[key].toString().includes(searchKey);
      });
    });
  }

  public search() {
    if (!this.skinSearch) {
      return this.skins;
    }
    if (this.skinSearch) {
      return this.filterIt(this.skins, this.skinSearch);
    }
  }
}
