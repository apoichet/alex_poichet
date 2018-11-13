import {SkillInterestEnum} from './skill-interest.enum';
import {SkillLevelEnum} from './skill-level.enum';
import {SkillTrend} from './skill-trend';

export interface ISkill {

  name: string;
  trendDatas: SkillTrend[];
  interest: SkillInterestEnum;
  level: SkillLevelEnum;
  color: String;
  calculTrendAverage(): number;
  getLevel(): String;
  getInterest(): String;

}

export class Skill implements ISkill {
  private _name: string;
  private _trendDatas: SkillTrend[];
  private _interest: SkillInterestEnum;
  private _level: SkillLevelEnum;
  private _color: String;

  calculTrendAverage(): number {
    const sum = this._trendDatas.map(trend => trend.value).reduce((t1, t2) => t1 + t2);
    return Math.round(sum / this._trendDatas.length);
  }

  constructor(name: string, interest: SkillInterestEnum, level: SkillLevelEnum, color: String, trendDatas: SkillTrend[]) {
    this._color = color;
    this._interest = interest;
    this._level = level;
    this._name = name;
    this._trendDatas = trendDatas;
  }

  getInterest(): String {
    return SkillInterestEnum[this._interest];
  }

  getLevel(): String {
    return SkillLevelEnum[this._level];
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get trendDatas(): SkillTrend[] {
    return this._trendDatas;
  }

  set trendDatas(value: SkillTrend[]) {
    this._trendDatas = value;
  }

  get interest(): SkillInterestEnum {
    return this._interest;
  }

  set interest(value: SkillInterestEnum) {
    this._interest = value;
  }

  get level(): SkillLevelEnum {
    return this._level;
  }

  set level(value: SkillLevelEnum) {
    this._level = value;
  }

  get color(): String {
    return this._color;
  }

  set color(value: String) {
    this._color = value;
  }
}
