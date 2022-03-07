import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../services/hotel-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  public columnsToDisplay = ['', 'Hotel Name (City)', 'Persons', 'Price', 'Total'];

  constructor(public hotelService: HotelDataService) {
  }

  onCheckout() {
    // TODO
    alert("Doing checkout");
  }

  onClick() {
    this.hotelService.bookedHotels.length;
  }

  removeData() {
    this.hotelService.bookedHotels.pop();
    //this.hotelService.bookedHotels.renderRows();
  }
}
