import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Petition:string|any;
 


  constructor(public dashboardservice:DashboardService) { }

  ngOnInit(): void {
    
  }

  }


