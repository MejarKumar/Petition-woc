import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import{ReactiveFormsModule} from '@angular/forms'
 import{MatButtonModule} from '@angular/material/button'
import{MatFormFieldModule} from '@angular/material/form-field'
import{MatInputModule} from '@angular/material/input'
import{MatCardModule} from '@angular/material/card'
import{MatTabsModule} from '@angular/material/tabs'
// import{MatCardModule} from '@angular/material/card'

const MaterialComponent =[
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule
]

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterComponent,
   
  ],
  imports: [
    CommonModule,
    MaterialComponent,
    ReactiveFormsModule
  ],
  exports:[
    MaterialComponent
  ],
  providers:[
    AuthService
  ]
})
export class LoginModule { }
