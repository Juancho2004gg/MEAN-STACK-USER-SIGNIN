import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authService/auth.service';
import { Users } from 'src/app/models/users/users';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers:[AuthService]
})
export class AuthComponent implements OnInit {

  constructor(public authService: AuthService ) { }
  
  ngOnInit(): void {
  }

}
