import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TableCarDTO } from '../model/TableCarDTO';
import {RequestSOAP} from '../model/RequestSOAP';


@Injectable()
export class RequestsService {
    findAllCarsUrl : string;
    acceptRequestUrl:string;
    declineRequestUrl:string;

    constructor(private http: HttpClient) {
        this.findAllCarsUrl = 'http://localhost:8080/request';
        this.acceptRequestUrl = 'http://localhost:8080/request/acceptRequest';
        this.declineRequestUrl = 'http://localhost:8080/request/declineRequest';
    }


      public getAllCars(): Observable<any> {
        return this.http.get<Set<RequestSOAP>>(this.findAllCarsUrl );
      }
      public acceptRequest(id:number): Observable<any> {
        return this.http.get(this.acceptRequestUrl + '/' + id );
      }
      public declineRequest(id:number): Observable<any> {
        return this.http.get(this.declineRequestUrl + '/' + id );
      }

}
