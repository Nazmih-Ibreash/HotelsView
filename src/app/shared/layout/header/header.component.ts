import { Component, OnInit } from '@angular/core';
import { HotelDataService } from 'src/app/services/hotel-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public hotelService: HotelDataService) {}

  ngOnInit(): void {}
}
