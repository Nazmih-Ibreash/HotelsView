import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../services/hotel-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {

  constructor(public hotelService: HotelDataService) {

  }

}
