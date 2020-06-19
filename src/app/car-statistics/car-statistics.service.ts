import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TableCarDTO } from '../model/TableCarDTO';


@Injectable()
export class CarStatisticsService {
    findAllCarsUrl : string;
    finishRentUrl : string;
    addReportUrl:string;
    findBestGradeCarUrl:string;
    findMostKmCarUrl:string;

    constructor(private http: HttpClient) {
        this.findAllCarsUrl = 'http://localhost:8080/car/getAllCarStatistics';
        this.findBestGradeCarUrl = 'http://localhost:8080/car/findBestGradeCarUrl';
        this.findMostKmCarUrl = 'http://localhost:8080/car/findMostKmCar'
    }


      public getAllCars(): Observable<any> {
        return this.http.get<Set<TableCarDTO>>(this.findAllCarsUrl );
      }
      public getBestGradeCar():Observable<any> {
          return this.http.get<TableCarDTO>(this.findBestGradeCarUrl);
      }
      public getMostCarKm():Observable<any> {
        return this.http.get<TableCarDTO>(this.findMostKmCarUrl);
    }
      
}