import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {CarDTO} from '../model/CarDTO';
import {CustomerDTO} from '../model/CustomerDTO';

@Injectable()
export class EnterOccupationService {
  findFreeCarsUrl : string;
  findAllCarsUrl: string;
  findAllCustomersUrl: string;
  setOccupationWitoutDriverUrl: string;
  setOccupationWithNewDriverUrl: string;
  setOccupationWithExistingDriverUrl: string;
  constructor(private http: HttpClient) {
    this.findFreeCarsUrl = 'http://localhost:8080/car/freeForDates';
    this.findAllCarsUrl = 'http://localhost:8080/car/all';
    this.setOccupationWitoutDriverUrl = 'http://localhost:8080/occupation/createWithoutCustomer';
    this.setOccupationWithNewDriverUrl = 'http://localhost:8080/occupation/createWithNewCustomer';
    this.setOccupationWithExistingDriverUrl = 'http://localhost:8080/occupation/createWithExistingCustomer';
    this.findAllCustomersUrl = 'http://localhost:8080/customer/all';
  }

  public getFreeCars(startingDate: Date, endingDate: Date): Observable<any> {
    console.log("Radi dugme za pronalazenje novih auta")
    return this.http.get<Set<CarDTO>>(this.findFreeCarsUrl + '/' + startingDate + '/' + endingDate);
  }

  public getAllCars(): Observable<any> {
    console.log("Radi dugme za pronalazenje novih auta")
    return this.http.get<Set<CarDTO>>(this.findAllCarsUrl );
  }

  public setOccupationWithoutDriver(startingDate: Date, endingDate: Date, carsId: Number){
    console.log(this.setOccupationWitoutDriverUrl + '/' + startingDate + '/' + endingDate + '/' + carsId)
    return this.http.get<any>(this.setOccupationWitoutDriverUrl + '/' + startingDate + '/' + endingDate + '/' + carsId);
  }

  public setOccupationWithNewDriver(startingDate: Date, endingDate: Date, carsId: Number, name: String, surname: String, jmbg: Number){
    console.log(this.setOccupationWithNewDriverUrl + '/' + startingDate + '/' + endingDate + '/' + carsId + '/' + name + '/' + surname + '/' + jmbg)
    return this.http.get<any>(this.setOccupationWithNewDriverUrl + '/' + startingDate + '/' + endingDate + '/' + carsId + '/' + name + '/' + surname + '/' + jmbg);
  }

  public setOccupationWithExistingDriver(startingDate: Date, endingDate: Date, carsId: Number, customersId: Number){
    console.log(this.setOccupationWithExistingDriverUrl + '/' + startingDate + '/' + endingDate + '/' + carsId + '/' + customersId)
    return this.http.post<any>(this.setOccupationWithExistingDriverUrl + '/' + startingDate + '/' + endingDate + '/' + carsId +  '/' + customersId, null);
  }

  public getAllCustomers(): Observable<any> {
    return this.http.get<Set<CustomerDTO>>(this.findAllCustomersUrl );
  }

}
