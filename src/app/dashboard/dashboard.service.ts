import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore'
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private afs: AngularFirestore) { }


  create_newPetition(Record) {
    return this.afs.collection('Petition').add(Record)
  }
  get_AllPetition(){
    return this.afs.collection('Petition').snapshotChanges();
  }



}
