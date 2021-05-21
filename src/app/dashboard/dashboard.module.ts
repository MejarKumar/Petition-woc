import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// module for routing 
import {AppRoutingModule} from '../app-routing.module'
import { BrowserModule } from '@angular/platform-browser';
// module for component 
import { HomeComponent } from './home/home.component';
import { PetitionComponent } from './petition/petition.component';
import {DashboardService} from './dashboard.service'
import { PetitionListComponent } from './petition-list/petition-list.component'
import { ProfileComponent } from './profile/profile.component';
import { AcademicinfoComponent } from './academicinfo/academicinfo.component'

import {FormsModule} from '@angular/forms';

// module for material design 
import {MatStepperModule} from '@angular/material/stepper'
import{MatButtonModule} from '@angular/material/button'
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatInputModule} from '@angular/material/input'
import{MatCardModule} from '@angular/material/card'
import{MatSelectModule} from '@angular/material/select'
import {ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule } from '@angular/material/grid-list'
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
 import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
 import {MatDividerModule} from '@angular/material/divider'
 import {MatMenuModule} from '@angular/material/menu'
 import {MatExpansionModule } from '@angular/material/expansion'
 import{MatIconModule} from '@angular/material/icon'

 import { NgProgressModule } from 'ngx-progressbar';
import {LoadingBarModule} from '@ngx-loading-bar/core'
 import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailComponent } from './detail/detail.component';

const MaterialComponent=[
  MatButtonModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatGridListModule,
  MatDividerModule,
  MatExpansionModule,
  MatMenuModule,
  MatIconModule

]
@NgModule({
  declarations: [
    HomeComponent,
    PetitionComponent,
    PetitionListComponent,
    ProfileComponent,
    AcademicinfoComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MaterialComponent,
    ReactiveFormsModule,
    NgbModule,
    LoadingBarModule,
    BrowserAnimationsModule,
    NgProgressModule,
    
    ShareButtonsModule.withConfig({
      debug:true,
    }),
    ShareIconsModule,
    // FontAwesomeModule
  
  ],
  exports:[ MaterialComponent],
  providers:[
    DashboardService
  ],
  bootstrap:[
    HomeComponent,
   PetitionComponent
  ]
})
export class DashboardModule { }
