import { Component, OnInit } from '@angular/core';
import {CarDTO} from '../model/CarDTO';
import { AddCarService } from './addCar.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
    selector: 'app-addCar',
    templateUrl: './addCar.component.html',
    styleUrls: []
  })

  export class AddCarComponent implements OnInit {
    carDTO: CarDTO;
    carType: string;
    carModel: string;
    carClass: string;
    lowerPrice: number;
    upperPrice: number;
    transmissionType: string;
    kmPlanAmount: number;
    kmAmount: number;
    cdw: boolean;
    kidsSeats: number;
    startDate : Date;
    endDate : Date;

    public base64Image: string;
    public base64Images: Set<string>;

    constructor(private service: AddCarService, private  router: Router) {
      this.carDTO = new CarDTO();
      this.base64Images = new Set<string>();
    }

    ngOnInit(): void {
      if (localStorage.getItem('role') !== 'admin'){
        this.router.navigate(['home']);
      }
    }

    onSubmitCreate() {

        /*this.service.createCertificate(this.subjectData, CurValue, alias, tempate).subscribe(result => {
          alert('Successfully');
          location.reload();
        });*/
        const e = (document.getElementById('gasType')) as HTMLSelectElement;
        this.carDTO.carModel = this.carModel;
        this.carDTO.carClass = this.carClass;
        this.carDTO.carType = this.carType;
        this.carDTO.transmissionType = this.transmissionType;
        this.carDTO.lowerPrice = this.lowerPrice;
        this.carDTO.upperPrice = this.upperPrice;
        this.carDTO.kmAmount = this.kmAmount;
        this.carDTO.kmPlanAmount = this.kmPlanAmount;
        this.carDTO.cdw = this.cdw;
        this.carDTO.kidsSeats = this.kidsSeats;
        this.carDTO.gasType = e.value;
        this.carDTO.startDate = this.startDate;
        this.carDTO.endDate = this.endDate;

        this.carDTO.images = Array.from(this.base64Images);

        this.service.createCar(this.carDTO).subscribe(result => {
          alert('Successfully');
          this.router.navigate(['home']);
        });
      }

      changeListener($event): void {
        this.readThis($event.target);
      }
    
      readThis(inputValue: any): void {
        var file: File = inputValue.files[0];
        var myReader: FileReader = new FileReader();
    
        myReader.onloadend = (e) => {
          this.base64Image = myReader.result as string;
          this.base64Images.add(myReader.result as string);
          //this.carDTO.images.push(myReader.result as string);
        }
        myReader.readAsDataURL(file);
    
      }
    
      removeImage(imageName: string){
        this.base64Images.delete(imageName);
        //this.carDTO.images.delete(imageName);
      }

  }
