import {Skill} from '../../../../model/skill/skill';
import {Chart} from '../skills-comparing/chart';

export class SkillOverview {

  private _chart: Chart;
  private _skill: Skill;

  constructor(skill: Skill, chart: Chart) {
    this._chart = chart;
    this._skill = skill;
  }

  get chart(): Chart {
    return this._chart;
  }

  get skill(): Skill {
    return this._skill;
  }
}
