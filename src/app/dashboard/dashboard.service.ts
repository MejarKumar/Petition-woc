import { Injectable } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore'


import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

// for like button in petition 
// userId:string;


  constructor(private afs: AngularFirestore, private afd:AngularFireDatabase ) { 
    // this.afAuth.authState.subscribe(auth=>{
    //   if(auth) this.userId=auth.uid;
    // })
  }

  
  

  create_newPetition(Record) {
    return this.afs.collection('Petition').add(Record)
  }
  get_AllPetition(){
    return this.afs.collection("Petition", ref =>ref.orderBy('TimeSent','desc')).snapshotChanges();
  }

 
 
}
