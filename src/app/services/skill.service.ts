import {EventEmitter, Injectable, OnInit, Output} from '@angular/core';
import {ISkill, Skill} from '../shared/skill/skill';
import {SKILLS} from './mock-skills';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SkillTrend} from '../shared/skill/skill-trend';
import {SkillInterestEnum} from '../shared/skill/skill-interest.enum';
import {SkillLevelEnum} from '../shared/skill/skill-level.enum';

@Injectable({
  providedIn: 'root'
})
export class SkillService {


  skills: Skill[];

  @Output() loadSkills = new EventEmitter<ISkill[]>();

  async load(){
    const options = this.buildOptions();
    return this.http.get('http://localhost:3000/api/interestOverTime', options)
      .pipe(map(value => {
        const trends = value['default'].timelineData;
        const skillTrends =  trends.map(trend => this.buildTrend(trend));
        return Array.of(new Skill('Scala', SkillInterestEnum.High, SkillLevelEnum.Practiced, '#ff0000', skillTrends));
      }))
      .toPromise();
  }

  getSkill(name: string): Observable<ISkill> {
    return of(SKILLS.find(skill => skill.name === name));
  }

  filterSkills(skills: ISkill[], names: String[]) {
    //const skillsFiltered =  SKILLS.filter(skill => names.includes(skill.name));
    const skillsFiltered =  skills.filter(skill => names.includes(skill.name));
    this.loadSkills.emit(skillsFiltered);
  }

  getSkills(): Observable<Skill[]> {
    //return of(SKILLS);
    return of(this.skills);
  }

  private buildOptions(){
    return {
      headers: new HttpHeaders(),
      params: new HttpParams()
        .append('keyword', 'Scala')
        .append('startTime', '2018-01-01')
        .append('endTime', '2018-10-01')
    };
  }

  private buildTrend(trend: any): SkillTrend{
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const month = monthNames.indexOf(trend.formattedAxisTime.substr(0, 3))+1;
    const indexStartDay = trend.formattedAxisTime.indexOf(' ');
    const indexEndDay = trend.formattedAxisTime.indexOf(',');
    const date = trend.formattedAxisTime.substring(indexStartDay+1, indexEndDay);
    const year = trend.formattedAxisTime.substr(indexEndDay + 2, 4);
    return new SkillTrend(trend.value, new Date(year, month, date));
  }

  constructor(private http: HttpClient) { }
}
