export class Link{
  private _ref: String;
  private _name: String;

  constructor(ref: String, name: String) {
    this._ref = ref;
    this._name = name;
  }
  get ref(): String {
    return this._ref;
  }
  get name(): String {
    return this._name;
  }
}
