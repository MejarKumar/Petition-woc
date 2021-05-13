import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { LoadingBarService } from '@ngx-loading-bar/core';
import {Router} from '@angular/router';
import {FormBuilder,FormControl,FormGroup, Validators} from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
email:string;
password:string;
registerform= new FormGroup({});
loginform= new FormGroup({});
  constructor(private authservice:AuthService,private auth:AngularFireAuth, private router:Router, private fb:FormBuilder,private loadingBar:LoadingBarService) { }

  ngOnInit(): void {
    this.registerform=this.fb.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
    this.loginform=this.fb.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    })
  }
  createUser(){
    const {email,password}=this.registerform.value;
    this.auth.createUserWithEmailAndPassword(email,password).then(user=>{
      console.warn('RegisterComponent ->createUser -> user', user);
      this.router.navigate(['/home']);
    });
}

onLogin(){
  const {email,password}=this.loginform.value;
  this.auth.signInWithEmailAndPassword(email,password).then(user=>{
    // console.warn('RegisterComponent ->createUser -> user', user);
    this.router.navigate(['/home']);
  });
}


// method for loadingnar
startLoading() {
  this.loadingBar.start();
}

stopLoading() {
  this.loadingBar.complete();
}
}
