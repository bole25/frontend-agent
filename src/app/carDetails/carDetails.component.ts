import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllCarService } from '../allCars/allCars.service';
import { CarDTO } from '../model/CarDTO';
import { CarDetailsService } from './carDetails.service';

@Component({
    // tslint:disable-next-line:component-selector
      selector: 'app-car-details',
      templateUrl: './carDetails.component.html',
      styleUrls: []
    })

export class CarDetailsComponent implements OnInit{
    car : CarDTO;
    id: number;
    private sub: any;
    enterComment : string;

    constructor(private route: ActivatedRoute,private service: CarDetailsService) {
        this.car = new CarDTO();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
           this.id = +params['id']; // (+) converts string 'id' to a number
           this.service.getById(this.id).subscribe(response => {
                this.car = response;
                console.log(this.car);
                var imageDiv = document.getElementById('imageDiv');
                for(let s of this.car.images){
                    var x = document.createElement("IMG");
                    x.setAttribute("src", s);
                    x.setAttribute("width", "350");
                    x.setAttribute("height", "228");
                    imageDiv.appendChild(x);
                }
                for(let s of this.car.comments){
                    var x = document.createElement("P");
                    x.innerHTML = s;
                    document.getElementById('comments').appendChild(x);
                }
            });
        });
    }

    public likeCar(id: number){
        this.service.likeCar(id).subscribe(response =>  {
            //alert('Successfully');
            var likes = document.getElementById('likes');
            var likesNumber =  parseInt(likes.textContent);
            likesNumber++;
            likes.innerHTML = likesNumber.toString();
          });
    }
    public dislikeCar(id: number){
        this.service.dislikeCar(id).subscribe(response =>  {
            var dislikes = document.getElementById('dislikes');
            var dislikesNumber =  parseInt(dislikes.textContent);
            dislikesNumber++;
            dislikes.innerHTML = dislikesNumber.toString();
          });
    }
    public commentCar(id:number){
        this.service.enterComment(id,this.enterComment).subscribe(response =>  {
            var x = document.createElement("P");
            x.innerHTML = this.enterComment;
            document.getElementById('comments').appendChild(x);
            this.enterComment = "";
          });
    }
}