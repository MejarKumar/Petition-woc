import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'
import{ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  Petition:string|any;
  Searched_Id:string|any;
  
  constructor(public dashboardservice:DashboardService,private ActiveRouter:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.ActiveRouter.snapshot.params.id);

  this.Searched_Id=this.ActiveRouter.snapshot.params.id;
    this.dashboardservice.get_AllPetition().subscribe(result=>{
      
      this.Petition= result.map(e=>{
            return{
              // id:e.payload.doc.id,
              Title:e.payload.doc.data()['Title'],
              TagedAuthority:e.payload.doc.data()['TagedAuthority'],
              Description:e.payload.doc.data()['Description'],
              TimeSent:e.payload.doc.data()['TimeSent']
            };
          })
      })
    }
    
    
  }



    
    
    // subscribe(data =>{
    //   this.Petition= data.map(e=>{
    //     return{
    //       id:e.payload.doc.id,
    //       Title:e.payload.doc.data()['Title'],
    //       TagedAuthority:e.payload.doc.data()['TagedAuthority'],
    //       Description:e.payload.doc.data()['Description'],
    //       TimeSent:e.payload.doc.data()['TimeSent']
    //     };
    //   })
    //   console.log(this.Petition)
      
//       this.dashboardservice.get_currentPetition(this.ActiveRouter.snapshot.params.id).subscribe((result)=>{
// console.log(result)
//       })
    // })
// this.dashboardservice.get_AllPetition().subscribe((data)=>{
//   this.Petition= data.map(e=>{
//     return{
//       id:e.payload.doc.id,
//       Title:e.payload.doc.data()['Title'],
//       TagedAuthority:e.payload.doc.data()['TagedAuthority'],
//       Description:e.payload.doc.data()['Description'],
//       TimeSent:e.payload.doc.data()['TimeSent']
//     };
//   })
// })

   
