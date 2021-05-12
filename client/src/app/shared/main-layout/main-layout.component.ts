import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  allRequests=[  {
    "name": "ASUS ROG Strix G15",
    "price": 2500, 
    "details": "Dream for gamers",
    "avaliable": true,
},
{
  "id": "5",
  "provider": "Asus",
  "name": "ASUS ROG Strix G14",
  "price": 2500,
  "details": "Dream for gamers",
  "avaliable": true
},
{
  "id": "5",
  "provider": "Asus",
  "name": "ASUS ROG Strix G13",
  "price": 2500,
  "details": "Dream for gamers",
  "avaliable": true
},];

  constructor() { }

  ngOnInit(): void {

  }

}
