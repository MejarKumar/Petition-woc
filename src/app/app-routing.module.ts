import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home.component';
import { PetitionComponent } from './dashboard/petition/petition.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { RegisterComponent } from './login/register/register.component';
import {ProfileComponent} from './dashboard/profile/profile.component'
import {PetitionListComponent} from './dashboard/petition-list/petition-list.component';
import {AcademicinfoComponent} from './dashboard/academicinfo/academicinfo.component'
const routes: Routes = [
{
  path:"",component:LoginFormComponent
},
{
  path:"loginform",component:LoginFormComponent
},
{
  path:"register",component:RegisterComponent
},
{
  path:"home",component:HomeComponent
},
{
  path:"petition",component:PetitionComponent
},
{
  path:"petitionlist",component:PetitionListComponent
},
{
  path:"profile",component:ProfileComponent
},
{
  path:"academicinfo",component:AcademicinfoComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
