export class RequestParam {
  private _keyword: string;                  // Required
  private _geo: string;                      // Optional
  private _h1: string;                       // Optional
  private _timezone: string;                 // Optional
  private _category: number;                 // Optional
  private _granularTimeResolution: boolean;  // Optional
  private _startTime: string;                // Optional
  private _endTime: string;                  // Optional

  constructor(keyword: string) {
    this._keyword = keyword;
  }

  withGeo(value: string) {
    this._geo = value;
    return this;
  }

  withH1(value: string) {
    this._h1 = value;
    return this;
  }

  withTimezone(value: string) {
    this._timezone = value;
    return this;
  }

  withGranularTimeResolution(value: boolean) {
    this._granularTimeResolution = value;
    return this;
  }

  withCategory(value: number) {
    this._category = value;
    return this;
  }


  withStartTime(value: string) {
    this._startTime = value;
    return this;
  }

  withEndTime(value: string) {
    this._endTime = value;
    return this;
  }

  get keyword(): string {
    return this._keyword;
  }

  get geo(): string {
    return this._geo;
  }

  get h1(): string {
    return this._h1;
  }

  get timezone(): string {
    return this._timezone;
  }

  get category(): number {
    return this._category;
  }

  get granularTimeResolution(): boolean {
    return this._granularTimeResolution;
  }


  get startTime(): string {
    return this._startTime;
  }

  get endTime(): string {
    return this._endTime;
  }
}
