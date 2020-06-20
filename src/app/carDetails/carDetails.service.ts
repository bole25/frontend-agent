import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDTO } from '../model/CarDTO';



@Injectable()
export class CarDetailsService {
    findById : string;
    likeUrl : string;
    dislikeUrl : string;
    enterCommentUrl:string;

    constructor(private http: HttpClient) {
        this.findById = 'http://localhost:8080/car'
        this.likeUrl = 'http://localhost:8080/car/like';
        this.dislikeUrl = 'http://localhost:8080/car/dislike'; 
        this.enterCommentUrl = 'http://localhost:8080/car/enterComment'; 
      }

      public getById(id: number){
        return this.http.get<CarDTO>(this.findById + '/' + id);
      }
      public likeCar(id: number){
          return this.http.get(this.likeUrl + '/' + id);
      }
      public dislikeCar(id: number){
        return this.http.get(this.dislikeUrl + '/' + id);
      }
      public enterComment(id:number,comment: string){
        return this.http.get(this.enterCommentUrl + '/' + id + '/' + comment);
    }
}