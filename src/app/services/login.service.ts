import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn: boolean = false;
  redirectUrl: string = "";

  constructor(private http: HttpClient) { }

  getLoginDetails(username: string, password: string) {
    return this.http.get("assets/mock/mockLogin.json").pipe(
      map((users: any) => {
        return users.find((user: any) => {
          return user.username === username && user.password === password;
        });
      })
    );
  }
}
