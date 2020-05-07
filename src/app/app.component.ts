import { Component, NgModule } from '@angular/core';
import {LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-agent';
  password: string;
  show = true;

  constructor(private loginService: LoginService) {
  }


  login() {
    this.loginService.getUser(this.password)
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.token);
          alert('successful login');
          this.show = false;
        },
        err => {
          if (err.status === 400) {
            alert('Wrong password');
          } else if (err.status === 406 || err.status === 403) {
            alert('Wrong password');
          }
        });
  }

}
