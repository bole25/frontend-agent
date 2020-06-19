import { Component, OnInit } from '@angular/core';
import { CarDTO } from '../model/CarDTO';
import { TableCarDTO } from '../model/TableCarDTO';
import { Router } from '@angular/router';
import { CarStatisticsService } from './car-statistics.service';

@Component({
  selector: 'app-car-statistics',
  templateUrl: './car-statistics.component.html',
  styleUrls: ['./car-statistics.component.css']
})
export class CarStatisticsComponent implements OnInit {
  public cars: Set<TableCarDTO>;
  public bestGradeCar:TableCarDTO;
  public mostKmCar:TableCarDTO;

  constructor(private service: CarStatisticsService, private  router: Router) { 
    this.cars = new Set<TableCarDTO>();
    this.bestGradeCar = new TableCarDTO();
    this.mostKmCar = new TableCarDTO();
  }

  ngOnInit(): void {
    this.service.getAllCars().subscribe(response => {
      this.cars = response;
    });
    this.service.getBestGradeCar().subscribe(data => {
      this.bestGradeCar = data;
    });
    this.service.getMostCarKm().subscribe(data => {
      this.mostKmCar = data;
    });
    
  }

  get isValidCarModel(){
    return true;
  }

}
