import { Component, OnInit} from '@angular/core';
import {DashboardService} from '../dashboard.service'
@Component({
  selector: 'app-petition-list',
  templateUrl: './petition-list.component.html',
  styleUrls: ['./petition-list.component.css']
})
export class PetitionListComponent implements OnInit {
Petition:string|any;
  constructor(public dashboardservice:DashboardService) { }



  ngOnInit(): void {
    this.dashboardservice.get_AllPetition().subscribe(data =>{
      this.Petition= data.map(e=>{
        return{
          id:e.payload.doc.id,
          Title:e.payload.doc.data()['Title'],
          TagedAuthority:e.payload.doc.data()['TagedAuthority'],
          Description:e.payload.doc.data()['Description'],
          TimeSent:e.payload.doc.data()['TimeSent']
        };
      })
      console.log(this.Petition)
    })
  }

}
