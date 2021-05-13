import { Component, OnInit } from '@angular/core';
import {AuthService}from '../auth.service'
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerform= new FormGroup({})
  constructor(private auth:AngularFireAuth, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
