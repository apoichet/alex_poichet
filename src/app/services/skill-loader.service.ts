import {Injectable} from '@angular/core';
import {RequestParam} from './api/request-param';
import {getRandomColor, monthNamesTrig, SKILLS_NAME} from './mock-skills';
import {SkillTrend} from '../shared/skill/skill-trend';
import {GoogleTrendApiService} from './api/google-trend-api.service';
import {Skill} from '../shared/skill/skill';
import {SkillLevelEnum} from '../shared/skill/skill-level.enum';
import {SkillInterestEnum} from '../shared/skill/skill-interest.enum';

@Injectable({
  providedIn: 'root'
})
export class SkillLoaderService {

  async load() {

    const skills: Skill[] = [];

    for (let i = 0; i < SKILLS_NAME.length; i++) {
      const requestParam = this.buildRequestParam(SKILLS_NAME[i]);
      console.log('start retrieve datas for', SKILLS_NAME[i]);
      const skillTrend = await this.googleTrendApi.findInterest(requestParam);
      console.log('end retrieve datas', skillTrend);
      const values = [];
      const dates = [];
      skillTrend.default.timelineData.forEach(timeline => {
        values.push(timeline.value[0]);
        dates.push(this.buildDate(timeline.formattedAxisTime));
      });
      skills.push(this.buildSkill(SKILLS_NAME[i], values, dates));
    }
    return skills;
  }

  private buildDate(date: String) {
    const month = monthNamesTrig.indexOf(date.substr(0, 3)) + 1;
    const indexStartDay = date.indexOf(' ');
    const indexEndDay = date.indexOf(',');
    const day = date.substring(indexStartDay + 1, indexEndDay);
    const year = date.substr(indexEndDay + 2, 4);
    return new Date(Number(year), month, Number(day));
  }

  private buildSkill(name: string, datas: number[], dates: Date[]): Skill {
    const skillTrend: SkillTrend[] = [];
    dates.forEach((date, index) => {
      skillTrend.push(new SkillTrend(datas[index], date));
    });
    return new Skill(name, SkillInterestEnum.Medium, SkillLevelEnum.Practiced, getRandomColor(), skillTrend);
  }

  private buildRequestParam(keyword: string): RequestParam {
    return new RequestParam(keyword)
      .withGeo('FR')
      .withStartTime('2018-01-01')
      .withEndTime('2018-10-01')
      .withH1('FR');
  }

  constructor(private googleTrendApi: GoogleTrendApiService) {
  }
}
