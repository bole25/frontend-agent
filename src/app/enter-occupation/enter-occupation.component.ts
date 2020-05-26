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
  freeCars: Set<CarDTO>;
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
    this.freeCars = new Set<CarDTO>();
    this.customers = new Set<CustomerDTO>();
    this.withNewDriver = false;
    this.withExistingDriver = false;
    this.withoutDriver = true;
    this.findAllCustomers();
  }

  onSubmitFindFreeCars(){
    console.log(this.customers);
    this.service.getFreeCars(this.startingDate, this.endingDate).subscribe( response => this.freeCars = response);
  }
  findAllCustomers(){
    this.service.getAllCustomers().subscribe(response => this.customers = response);
  }
  onSubmitCreate(){

    if (this.withNewDriver){
      console.log('Sa kreiranjen novog korisnika');
      // tslint:disable-next-line:max-line-length
      this.service.setOccupationWithNewDriver(this.startingDate, this.endingDate, this.selectedId, this.name, this.surname, this.jmbg).subscribe(result => {
        alert('Successfully');
        this.router.navigate(['home']);
      });
    } else if (this.withExistingDriver){
      // dodati poziv funkcije za slanje sa postojecim vozacem
      // tslint:disable-next-line:max-line-length
      this.service.setOccupationWithExistingDriver(this.startingDate, this.endingDate, this.selectedId, this.selectedCustomerId).subscribe(response => {
        alert('Successfully');
        this.router.navigate(['home']);
      }, error => {
        alert('You tried to hack us, you piece of crap');
        console.log('You tried to hack us, you piece of crap');
      });
    }
    else {
      this.service.setOccupationWithoutDriver(this.startingDate, this.endingDate, this.selectedId).subscribe(result => {
        alert('Successfully');
        this.router.navigate(['home']);
      });
    }

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
