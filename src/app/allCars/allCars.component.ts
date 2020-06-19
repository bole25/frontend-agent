import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AllCarService} from './allCars.service';
import { TableCarDTO } from '../model/TableCarDTO';

@Component({
    // tslint:disable-next-line:component-selector
      selector: 'app-allCars',
      templateUrl: './allCars.component.html',
      styleUrls: []
    })
  
    export class AllCarsComponent implements OnInit {
        
        public cars: Set<TableCarDTO>;
        public enterKm : number;
        public enterReport : string;
        public reportDiv : boolean;
        public reportId : number;

        constructor(private service: AllCarService, private  router: Router) {
            this.cars = new Set<TableCarDTO>();
            this.reportDiv = false;
        }

        ngOnInit(): void {
            this.service.getAllCars().subscribe(response => {
                this.cars = response;
            });
        }

        public finishRent(id: number){
            this.service.finishRent(id).subscribe(response =>  {
                alert('Enter your report');
                //this.router.navigate(['home']);
                this.reportId = id;
                this.reportDiv = true;
              });
        }
        public addReport(){
            this.service.addReport(this.reportId,this.enterReport,this.enterKm).subscribe(response => {
                this.router.navigate(['car-details/'+this.reportId]);
            })
        }
    }
   