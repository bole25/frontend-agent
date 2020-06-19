import { Component, OnInit } from '@angular/core';
import { EnterOccupationService } from './enterOccupation.service';
import {Router} from '@angular/router';
import {CarDTO} from '../model/CarDTO';
import {CustomerDTO} from '../model/CustomerDTO';

@Component({
  selector: 'app-enter-occupation',
  templateUrl: './enter-occupation.component.html',
  styleUrls: ['./enter-occupation.component.css']
})

export class EnterOccupationComponent implements OnInit {
  cars: Set<CarDTO>;
  customers: Set<CustomerDTO>;
  startingDate: Date;
  endingDate: Date;
  withNewDriver: boolean;
  withExistingDriver: boolean;
  withoutDriver: boolean;
  name: string;
  surname: string;
  jmbg: number;
  selectedId: number;
  selectedCustomerId: number;

  constructor(private service: EnterOccupationService, private  router: Router) { }

  ngOnInit(): void {
    this.cars = new Set<CarDTO>();
    this.customers = new Set<CustomerDTO>();
    this.withNewDriver = false;
    this.withExistingDriver = false;
    this.withoutDriver = true;
    this.findAllCustomers();
    this.findAllCars();
  }
  findAllCars(){
    this.service.getAllCars().subscribe(response => this.cars = response);
    console.log(this.cars);
  }
  findAllCustomers(){
    this.service.getAllCustomers().subscribe(response => this.customers = response);
  }
  onSubmitCreate(){

      this.service.setOccupation(this.startingDate, this.endingDate, this.selectedId, this.name, this.surname, this.jmbg).subscribe(result => {
        alert('Successfully');
        this.router.navigate(['home']);
      }, error => {
        alert("Wrong data");
      });
      // dodati poziv funkcije za slanje sa postojecim vozacem
      // tslint:disable-next-line:max-line-length
      /*this.service.setOccupationWithExistingDriver(this.startingDate, this.endingDate, this.selectedId, this.selectedCustomerId).subscribe(response => {
        alert('Successfully');
        this.router.navigate(['home']);
      }, error => {
        alert('You tried to hack us, you piece of crap');
        console.log('You tried to hack us, you piece of crap');
      });
      this.service.setOccupationWithoutDriver(this.startingDate, this.endingDate, this.selectedId).subscribe(result => {
        alert('Successfully');
        this.router.navigate(['home']);
      });*/

  }
  newDriverChanged(){
    this.withExistingDriver = false;
    this.withoutDriver = false;
  }
  existingDriverChanged(){
    this.withNewDriver = false;
    this.withoutDriver = false;
  }
  withoutDriverChanged(){
    this.withNewDriver = false;
    this.withExistingDriver = false;
  }
}
