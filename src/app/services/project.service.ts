import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';

export enum AuthEndPoint {
  LOGIN_USER = '/web-user/login',
  REGISTER = '/web-user/register',
  LATEST_PROJECT_LIST = '/project/list/latest',
  CATEGORY_LIST = '/category/list',
  INDUSTRY_LIST = '/industry/list',
  PROJECT_LIST = '/project/list',
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl!: string;

  constructor(
    private httpClient: HttpClient,
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getHeader(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return headers;
  }

  loginUser(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.LOGIN_USER, payload, { headers: this.getHeader() });
  }

  register(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + AuthEndPoint.REGISTER, payload, { headers: this.getHeader() });
  }

  projectList(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + AuthEndPoint.LATEST_PROJECT_LIST, { headers: this.getHeader() });
  }

  getCategoryList(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + AuthEndPoint.CATEGORY_LIST, { headers: this.getHeader() });
  }

  getIndustryList(): Observable<any> {
    return this.httpClient
      .get<any>(this.baseUrl + AuthEndPoint.INDUSTRY_LIST, { headers: this.getHeader() });
  }

  getProjectList(params: { keyword: string, page: string, limit: string, status: string, createdDate?:string }): Observable<any> {
    const url = `${this.baseUrl}${AuthEndPoint.PROJECT_LIST}`;

    let queryParams = new HttpParams();
    queryParams = queryParams.set('keyword', params?.keyword || '');
    if(params.createdDate){
      queryParams = queryParams.set('createdDate', params?.createdDate);
    }
    queryParams = queryParams.set('page', params?.page);
    queryParams = queryParams.set('limit', params?.limit);
    // if (params?.applied) {
    //   queryParams = queryParams.set('applied', params?.applied);
    // }
    // if (params?.sortlist) {
    //   queryParams = queryParams.set('sortlist', params?.sortlist);
    // }
    // if (params?.match) {
    //   queryParams = queryParams.set('match', params?.match);
    // }
    // if (params?.status) {
    //   queryParams = queryParams.set('status', params?.status);
    // }
    return this.httpClient.get<any>(url, { params: queryParams });
  }


}
