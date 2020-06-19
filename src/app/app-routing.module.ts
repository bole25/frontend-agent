import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddCarComponent } from './addCar/addCar.component';
import { EnterOccupationComponent } from './enter-occupation/enter-occupation.component';
import { AllCarsComponent} from './allCars/allCars.component';
import {CarDetailsComponent} from './carDetails/carDetails.component';
import {CarStatisticsComponent} from './car-statistics/car-statistics.component';
import {RequestsComponent} from './requests/requests.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addCar', component: AddCarComponent},
  {path: 'enterOccupation', component: EnterOccupationComponent},
  {path: 'allCars', component: AllCarsComponent},
  {path: 'car-details/:id', component: CarDetailsComponent },
  {path: 'carStatistics', component : CarStatisticsComponent},
  {path : 'requests' , component : RequestsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
