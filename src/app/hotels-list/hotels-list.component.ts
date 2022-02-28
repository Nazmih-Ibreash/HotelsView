import { Component, OnInit } from '@angular/core';
import { HotelDataService } from '../services/hotel-data.service';
import { Hotels } from '../shared/Hotels';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  public hotels: Hotels[] = [];
  public filter: string = "";
  public filteredHotels: Hotels[] = [];

  constructor(public hotelService: HotelDataService) {
    console.log("hotels");

      this.hotels = hotelService.hotels;
      this.filteredHotels = this.hotels;
  }

  ngOnInit(): void {
      ///this.hotelService.getHotels().subscribe();
    this.GetHotels();
  }

  onSearchChange() {
    this.GetHotels();

  }

  async GetHotels( ): Promise<void> {

    this.hotelService.getHotels(this.filter).subscribe((item) => {
      console.log(item);
      this.hotels = item;
      this.filteredHotels = item;

    });
  }


}
