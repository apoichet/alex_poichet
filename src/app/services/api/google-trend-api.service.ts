import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {RequestParam} from './request-param';
import {SkillTrendApi} from './skill-trend-api';

export const host = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class GoogleTrendApiService {

  findInterest(requestParam: RequestParam): Promise<SkillTrendApi> {
    const options = this.buildOptions(requestParam);
    return this.http.get<SkillTrendApi>(host + '/api/interestOverTime', options).toPromise();
  }

  private buildOptions(requestParam: RequestParam) {
    return {
      headers: new HttpHeaders(),
      params: new HttpParams()
        .append('keyword', requestParam.keyword)
        .append('startTime', requestParam.startTime)
        .append('endTime', requestParam.endTime)
        .append('category', JSON.stringify(requestParam.category))
        .append('geo', requestParam.geo)
        .append('h1', requestParam.h1)
    };
  }

  constructor(private http: HttpClient) {
  }
}
