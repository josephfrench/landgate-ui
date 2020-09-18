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
    {label: 'Water', description: 'Buy, lease, sell water rights and royalties', img: 'https://landgate.com/assets/images/water-icon.png'},
    {label: 'Oil / Gas', description: 'Buy, lease, sell mineral rights and royalties', img: 'https://landgate.com/assets/images/oil-gas-icon.png'},
    {label: 'Agriculture', description: 'Buy, lease, sell agriculture / pasture land', img: 'https://landgate.com/assets/images/agriculture-icon.png'},
    {label: 'Cellular', description: 'Buy, lease, sell cellular tower rights and royalties', img: 'https://landgate.com/assets/images/cell-tower-icon.png'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
