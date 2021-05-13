import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { PetitionComponent } from './dashboard/petition/petition.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterComponent } from './login/register/register.component';
import {ProfileComponent} from './dashboard/profile/profile.component'
import {PetitionListComponent} from './dashboard/petition-list/petition-list.component';
import {AcademicinfoComponent} from './dashboard/academicinfo/academicinfo.component'
import { DetailComponent } from './dashboard/detail/detail.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const redirectLoggedInToItems = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
    path:"", redirectTo:"/loginform", pathMatch:"full"   
  },
{
  path:"loginform",component:LoginFormComponent
},
{
  path:"register",component:RegisterComponent
},
{
  path:"home",component:HomeComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectLoggedInToItems }
},
{
  path:"petition",component:PetitionComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectLoggedInToItems }
},
{
  path:"petitionlist",component:PetitionListComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectLoggedInToItems }
},
{
  path:"profile",component:ProfileComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectLoggedInToItems }
},
{
  path:"academicinfo",component:AcademicinfoComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectLoggedInToItems }
},
{
  path:"detail/:id", component:DetailComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectLoggedInToItems }
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
