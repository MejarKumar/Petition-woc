import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  image= ['../../../assets/images/iitism.jpeg']
//  image:["../../../assets/images/iitism.jpeg","../../../assets/images/images.jpeg","../../../assets/images/images(1).jpeg"]
}
