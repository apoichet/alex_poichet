export class SkillExtension{
  private _name: String;
  private _checked: Boolean;


  constructor(name: String) {
    this._name = name;
  }


  set checked(value: Boolean) {
    this._checked = value;
  }

  get name(): String {
    return this._name;
  }

  get checked(): Boolean {
    return this._checked;
  }
}
