import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableCarDTO } from '../model/TableCarDTO';
import { Observable } from 'rxjs';

@Injectable()
export class AllCarService {
    findAllCarsUrl : string;
    finishRentUrl : string;
    addReportUrl:string;

    constructor(private http: HttpClient) {
        this.findAllCarsUrl = 'http://localhost:8080/car/getAllSimpleDatas';
        this.finishRentUrl = 'http://localhost:8080/car/finishRent';
        this.addReportUrl = 'http://localhost:8080/car/addReport'
      }


      public getAllCars(): Observable<any> {
        return this.http.get<Set<TableCarDTO>>(this.findAllCarsUrl );
      }

      public finishRent(id: number){
        return this.http.get(this.finishRentUrl + '/' + id);
      }
      public addReport(id:number,report:string,km:number){
        return this.http.get(this.addReportUrl + '/' + id + '/' + report + '/' + km);
      }
}