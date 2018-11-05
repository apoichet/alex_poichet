import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SkillService} from '../../../../services/skill.service';
import {Skill} from '../../../../shared/skill/skill';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-skills-comparing',
  templateUrl: './skills-comparing.component.html',
  styleUrls: ['./skills-comparing.component.css']
})
export class SkillsComparingComponent implements OnInit, AfterViewInit {
  skills: Skill[];

  isShowChart() {
    return this.skills && this.skills.length > 0;
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  constructor(private skillService: SkillService, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
      this.skillService.loadSkills.subscribe(skillsLoaded => {
        this.skills = skillsLoaded;
        if (this.isShowChart()) {
         console.log('go to show chart skill trend !');
        }
      });
  }



}
