import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TableCarDTO } from '../model/TableCarDTO';


@Injectable()
export class RequestsService {
    findAllCarsUrl : string;
    acceptRequestUrl:string;
    declineRequestUrl:string;

    constructor(private http: HttpClient) {
        this.findAllCarsUrl = 'http://localhost:8080/occupation/getAllCarsRequests';
        this.acceptRequestUrl = 'http://localhost:8080/occupation/acceptRequest';
        this.declineRequestUrl = 'http://localhost:8080/occupation/declineRequest';
    }


      public getAllCars(): Observable<any> {
        return this.http.get<Set<TableCarDTO>>(this.findAllCarsUrl );
      }
      public acceptRequest(id:number): Observable<any> {
        return this.http.get(this.acceptRequestUrl + "/" + id );
      }
      public declineRequest(id:number): Observable<any> {
        return this.http.get(this.declineRequestUrl + "/" + id );
      }
      
}