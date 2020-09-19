import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { Users } from 'src/app/models/users/users';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[LoginService]
})
export class AuthComponent implements OnInit {

  constructor(public loginService: LoginService ) { }
  
  ngOnInit(): void {
  }

}
