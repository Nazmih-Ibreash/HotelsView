import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HotelDataService } from '../services/hotel-data.service';
import { Hotels } from '../shared/Hotels';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit, OnChanges {

  @Input() filter: string = '';
  public filteredHotels: Hotels[] = [];
  public search!: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(public hotelService: HotelDataService, private _snackBar: MatSnackBar) {

    this.filteredHotels = hotelService.hotels;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
    console.log(JSON.stringify(changes));
    if (this.filter == undefined) {
      this.filter = '';
      this.GetHotels();
    } else {
      for (const propName in changes) {
        const change = changes[propName];
        this.filter = JSON.stringify(change.currentValue)
        console.log(this.filter);
      }
      this.GetHotels();
    }
  }

  ngOnInit() {}

  openSnackBar() {
    this._snackBar.open('Your search bar is empty!', 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  async GetHotels(): Promise<void> {
    console.log(this.filter);
    this.filter = this.filter.replace(/['"]+/g, '');
    this.hotelService.getHotels(this.filter).subscribe((item) => {
      console.log(item);
      this.filteredHotels = item;
    });
  }


}
