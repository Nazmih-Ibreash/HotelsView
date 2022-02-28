import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../services/hotel-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent   {

  constructor(public hotelService: HotelDataService) {
  }

  onCheckout() {
    // TODO
    alert("Doing checkout");
  }

}
