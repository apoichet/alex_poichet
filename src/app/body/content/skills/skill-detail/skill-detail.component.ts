import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../../model/skill/skill';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SkillService } from '../../../../services/skill.service';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.scss']
})
export class SkillDetailComponent implements OnInit {
  skill: Skill;

  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getSkill(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.skillService.getSkill(name).subscribe(skill => this.skill = skill);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getSkill();
  }
}
