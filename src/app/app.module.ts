import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import{MatTabsModule} from '@angular/material/tabs'
import {DashboardModule} from './dashboard/dashboard.module'
import {LoginModule} from './login/login.module'
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatGridListModule } from '@angular/material/grid-list'
 import {ReactiveFormsModule} from '@angular/forms'
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {ShareIconsModule} from 'ngx-sharebuttons/icons';

// firebase modules
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire'
import { AngularFireDatabaseModule} from '@angular/fire/database'
import {environment } from '../environments/environment.prod';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { from } from 'rxjs';
@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    DashboardModule,
    LoginModule,
    MatTabsModule,
    FlexLayoutModule,
    MatGridListModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgbModule,
    ReactiveFormsModule,
  
    ShareButtonsModule.withConfig({
      debug:true,
    }),
    ShareIconsModule
   
   
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
