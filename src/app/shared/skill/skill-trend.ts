export class SkillTrend {

  private _value: number[];
  private _date: Date;

  constructor(value: number[], date: Date) {
    this._value = value;
    this._date = date;
  }


  get value(): number[] {
    return this._value;
  }

  get date(): Date {
    return this._date;
  }
}
