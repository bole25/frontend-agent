import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'frontend-agent';
  password: string;
  show = false;

  constructor(private loginService: LoginService, private  router: Router) { }

  ngOnInit(): void {
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
