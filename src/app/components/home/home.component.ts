import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  resources = [
    {label: 'Solar', description: 'Buy, lease, sell solar rights and royalties', img: 'https://landgate.com/assets/images/wind-icon.png'},
    {label: 'Wind', description: 'Buy, lease, sell wind energy rights and royalties', img: 'https://landgate.com/assets/images/solar-icon.png'},
    {label: 'Water', description: 'Buy, lease, sell water rights and royalties', img: 'https://landgate.com/assets/images/water-icon.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
