import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
email:string;
password:string
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
  }

}
