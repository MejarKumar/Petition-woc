import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../dashboard.service'
import { LoadingBarService } from '@ngx-loading-bar/core';
 @Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.css']
})
export class PetitionComponent implements OnInit {
  Petition:string | any;
PetitionTitle:string;
PetitionTagedAuthority:string | any;
PetitionDescription:string;
TimeSent: Date = new Date()
   
  constructor(public dashboardservice:DashboardService,  private loadingBar:LoadingBarService) { }
  
  
  PetitionTagedAuthorities= [
  {id:'Academics',value:'Academics'},
  {id:'Library',value:'Library'},
  {id:'Sports',value:'Sports'},
  {id:'Hostel',value:'Hostel'},
  {id:'Mess',value:'Mess'},
  {id:'Cultral',value:'Cultral'}
]

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

  
  createPetition(){
let Record = {};
Record['Title']= this.PetitionTitle
Record['TagedAuthority']= this.PetitionTagedAuthority
Record['Description']= this.PetitionDescription
Record ['TimeSent']= this.getTimeStamp()
this.dashboardservice.create_newPetition(Record).then(res=>{

  this.PetitionTitle="";
this.PetitionTagedAuthority=0;
this.PetitionDescription="";
this.getTimeStamp();
console.log(res)
}).catch(error => {
  console.log(error);

  })
  
  
}
// method for get time 
getTimeStamp(){
const now= new Date();
const date = now.getUTCFullYear()+ '/' + (now.getUTCMonth()+ 1) +'/' + now.getUTCDate();
const time = now.getHours()+ ':' + now.getMinutes() + ':' + now.getSeconds();
return (date +'; ' + time);
}


// method for loadingnar
startLoading() {
  this.loadingBar.start();
}

stopLoading() {
  this.loadingBar.complete();
}
}
  
// function create_newPetition() {
//   throw new Error('Function not implemented.');
// }
