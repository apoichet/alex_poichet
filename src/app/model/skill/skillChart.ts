export class SkillChart{
  private _label: String;
  private _value: number;
  private _color: String;

  constructor(label: String, value: number) {
    this._label = label;
    this._value = value;
  }

  set color(value: String) {
    this._color = value;
  }

  get label(): String {
    return this._label;
  }

  get value(): number {
    return this._value;
  }

  get color(): String {
    return this._color;
  }
}
