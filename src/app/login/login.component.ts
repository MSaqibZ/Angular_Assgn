import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    sessionStorage.removeItem("user");
  }

  submitLogin(loginForm: NgForm) {
    this.loginService.getLoginDetails(loginForm.value.username, loginForm.value.password)
      .subscribe(user => {
        if (user) {
          sessionStorage.setItem("user", user);
          if (this.loginService.redirectUrl) {
            this.router.navigate([this.loginService.redirectUrl]);
          } else {
            this.router.navigate(['search']);
          }
          
        } else {
          this.errorMessage = "Username or Password incorrect!";
        }
      });
  }

}
