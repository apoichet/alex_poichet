import {ISkill} from '../../../../shared/skill/skill';
import {Chart} from '../skills-comparing/chart';

export class SkillOverview {

  private _chart: Chart;
  private _skill: ISkill;

  constructor(skill: ISkill, chart: Chart) {
    this._chart = chart;
    this._skill = skill;
  }

  get chart(): Chart {
    return this._chart;
  }

  get skill(): ISkill {
    return this._skill;
  }
}
