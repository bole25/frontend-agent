import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Message} from '../model/Message';

@Injectable()
export class MessagesService {
  private readonly inboxUrl: string;

  constructor(private http: HttpClient) {
    this.inboxUrl = 'http://localhost:8080/messages';
  }
  public getMessages(): Observable<any> {
    return this.http.get<Set<Message>>(this.inboxUrl);
  }

  public sendMessage(msg: Message): Observable<any> {
    return this.http.post(this.inboxUrl, msg);
  }
}
