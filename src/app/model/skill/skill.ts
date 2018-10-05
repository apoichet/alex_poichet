import {SkillLevel} from './skillLevel';
import {SkillInterest} from './skillInterest';

export class Skill {

  name: string;
  interest: SkillInterest;
  trend: number;
  level: SkillLevel;

  constructor(name: string, interest: SkillInterest, trend: number, level: SkillLevel) {
    this.name = name;
    this.interest = interest;
    this.trend = trend;
    this.level = level;
  }

}
