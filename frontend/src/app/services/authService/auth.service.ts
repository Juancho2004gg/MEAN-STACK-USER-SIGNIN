import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Users } from 'src/app/models/users/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AuthUsers: Users;
  UserList: Users[];
  readonly URL_API = 'http://localhost:3000/api/auth' 
  
  constructor(private http: HttpClient) { 
    this.AuthUsers = new Users();
  }
  login(Users: Users){
    return this.http.post(this.URL_API, Users);
  }
}
