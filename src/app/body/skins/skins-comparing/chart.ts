export class Chart{
  private _title: String;
  private _labels: Array<any>
  private _datas: Array<any>;
  private _type: String;
  private _colors: Array<any>;
  private _option: any;


  constructor(title: String, type: String) {
    this._title = title;
    this._type = type;
  }

  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }

  get labels(): String[] {
    return this._labels;
  }

  set labels(value: String[]) {
    this._labels = value;
  }

  get datas(): Array<any> {
    return this._datas;
  }

  set datas(value: Array<any>) {
    this._datas = value;
  }

  get type(): String {
    return this._type;
  }

  set type(value: String) {
    this._type = value;
  }

  get colors(): Array<any> {
    return this._colors;
  }

  set colors(value: Array<any>) {
    this._colors = value;
  }

  get option(): any {
    return this._option;
  }

  set option(value: any) {
    this._option = value;
  }


}
