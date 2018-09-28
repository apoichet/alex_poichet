import {SkinLevel} from './skinLevel';
import {SkinInterest} from './skinInterest';

export class Skin {

  name: string;
  interest: SkinInterest;
  trend: number;
  level: SkinLevel;

  constructor(name: string, interest: SkinInterest, trend: number, level: SkinLevel) {
    this.name = name;
    this.interest = interest;
    this.trend = trend;
    this.level = level;
  }

}
