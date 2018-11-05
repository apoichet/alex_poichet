import {ISkill} from '../../../shared/skill/skill';

export class SkillExtension{
  private _skill: ISkill;
  private _checked: Boolean;

  constructor(skill: ISkill, checked: Boolean) {
    this._skill = skill;
    this._checked = checked;
  }

  copy(checked: Boolean) {
    return new SkillExtension(this._skill, checked);
  }

  get skill(): ISkill {
    return this._skill;
  }

  get checked(): Boolean {
    return this._checked;
  }

  set checked(value: Boolean) {
    this._checked = value;
  }
}
