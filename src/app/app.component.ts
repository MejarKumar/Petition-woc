import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetitionIsm';

  opened= false;

  constructor(private auth:AngularFireAuth, private router:Router) { }
  onLogout(){
    this.auth.signOut();
    this.router.navigate(['/loginform'])
      }
}
