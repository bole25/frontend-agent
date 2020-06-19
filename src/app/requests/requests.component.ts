import { Component, OnInit } from '@angular/core';
import { RequestsService } from './requests.service';
import { Router } from '@angular/router';
import { RequestDTO } from '../model/RequestDTO';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  public requests : Set<RequestDTO>;
  constructor(private service: RequestsService, private  router: Router) { 
    this.requests = new Set<RequestDTO>();
  }

  ngOnInit(): void {
    this.service.getAllCars().subscribe(response =>  {
      this.requests = response;
    });
  }

 public acceptRequest(id:number,status:string){
  if(status != "PENDING"){
    alert("Cant accept request with status : Accept/Declined");
  }else{
    this.service.acceptRequest(id).subscribe(response =>  {
      location.reload();
    });
  }
 }
 public declineRequest(id:number,status:string){
  if(status != "PENDING"){
    alert("Cant accept request with status : Accept/Declined");
  }else {
    this.service.declineRequest(id).subscribe(response =>  {
      location.reload();
    });
  }
 }

}
