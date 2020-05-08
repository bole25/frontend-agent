import { Component, NgModule } from '@angular/core';
import {LoginService} from './services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-agent';
  password: string;
  show = false;

  constructor(private loginService: LoginService, private  router: Router) {
  }


  login() {
    this.loginService.getUser(this.password)
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.token);
          this.router.navigate(['home']);
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
