import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

export enum ChatAPIEndPoint {
  CREATE_CHAT = '/support/create',
  DELETE_CHAT = '/support/delete/',
  GET_CHAT_WITH_TWO_USER = '/support/list',
  GAT_CHAT_USER_WITH_USER = '/support/user/list',
}

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

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

  // Create Chat
  createChat(payload: any): Observable<any> {
    return this.httpClient
      .post<any>(this.baseUrl + ChatAPIEndPoint.CREATE_CHAT, payload, { headers: this.getHeader() });
  }

  // delete chat
  deleteChat(chatId: string): Observable<any> {
    return this.httpClient
      .delete<any>(this.baseUrl + ChatAPIEndPoint.DELETE_CHAT + chatId, { headers: this.getHeader() });
  }

  // get support chat between two user
  getChatBetweenTwoUser(userId: any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('userId', userId || '');

    return this.httpClient
      .get<any>(this.baseUrl + ChatAPIEndPoint.GET_CHAT_WITH_TWO_USER, { headers: this.getHeader(), params: queryParams });
  }

  // get Users Chatted With User
  getUserChatWithUser(userId: any): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('userId', userId || '');
    queryParams = queryParams.set('admin', false);

    return this.httpClient
      .get<any>(this.baseUrl + ChatAPIEndPoint.GAT_CHAT_USER_WITH_USER, { headers: this.getHeader(), params: queryParams });
  }
}
