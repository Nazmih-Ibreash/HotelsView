import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HotelDataService } from '../services/hotel-data.service';
import { Hotels } from '../shared/Hotels';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public filter: string = "";
  public filteredHotels: Hotels[] = [];
  public search!: string;
  @Output() filterEvent: EventEmitter<string> = new EventEmitter();


  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  sendFilter() {
    if (this.filter) {
      this.filterEvent.emit(this.filter);
    }
    else {
      this.openSnackBar();
    }
  }

  onClick() {
    if (this.filter) {
      this.filterEvent.emit(this.filter);
    }
    else {
      this.openSnackBar();
    }
  }

  openSnackBar() {
    this._snackBar.open('Your search bar is empty!', 'close', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  onClose() {
    this.filter = ''
  }

}
