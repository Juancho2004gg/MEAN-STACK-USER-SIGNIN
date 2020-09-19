import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Users } from 'src/app/models/users/users';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  LoginUsers: Users;
  UserList: Users[];
  
  constructor(private http: HttpClient) { 
    this.LoginUsers = new Users();
  }
  login(user: Users){
    return this.http.post('http://localhost:3000/api/login', Users);
  }
  
}
