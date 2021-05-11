import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PetitionComponent } from './petition/petition.component';
import {DashboardService} from './dashboard.service'
import {FormsModule} from '@angular/forms';
import { PetitionListComponent } from './petition-list/petition-list.component'
import {MatStepperModule} from '@angular/material/stepper'
import{MatButtonModule} from '@angular/material/button'
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatInputModule} from '@angular/material/input'
import{MatCardModule} from '@angular/material/card'
import{MatSelectModule} from '@angular/material/select'
import {ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AcademicinfoComponent } from './academicinfo/academicinfo.component'
import {MatGridListModule } from '@angular/material/grid-list'
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
 import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
 import {MatDividerModule} from '@angular/material/divider'
 import {MatExpansionModule } from '@angular/material/expansion'
//  import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
// import {ShareIconsModule} from 'ngx-sharebuttons/icons';
const MaterialComponent=[
  MatButtonModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatSelectModule,
  MatGridListModule,
  MatDividerModule,
  MatExpansionModule

]
@NgModule({
  declarations: [
    HomeComponent,
    PetitionComponent,
    PetitionListComponent,
    ProfileComponent,
    AcademicinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialComponent,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    
    // ShareButtonsModule.withConfig({
    //   debug:true,
    // }),
    // ShareIconsModule
  
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
