import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { BookedHotel } from "../shared/bookedHotels";
import { Hotels } from "../shared/Hotels";


@Injectable()
export class HotelDataService {
    constructor(private http: HttpClient) {

    }

    public hotels: Hotels[] = [];
    public bookedHotels: BookedHotel[] = [];
    public total: number = 0;
    public filteredHotels: Hotels[] = [];

  headers = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json'

    }),

    withCredentials: true,

  };

    getHotels(search: string): Observable<Hotels[]> {
        return this.http.get<Hotels[]>(`http://localhost:5000/api/hotels/GetHotelByName/${search || ''}`);
    }

  /*
  .pipe(map(data => {
                this.hotels = data;
                this.filteredHotels = this.hotels;
                return;
            }))
  */

    addBookedHotel(bookedHotel: Hotels) {
        let item!: BookedHotel | undefined;

        item = this.bookedHotels.find(b => b.id === bookedHotel.id);

        if (item) {
            item.quantity++;
            this.total += item.price
        } else {
            item = new BookedHotel();

            item.name = bookedHotel.name;
            item.city = bookedHotel.city;
            item.description = bookedHotel.city;
            item.id = bookedHotel.id;
            item.img = bookedHotel.img;
            item.stars = bookedHotel.stars;
            item.price = bookedHotel.price;
            item.quantity = 1;
            this.total += item.price

            this.bookedHotels.push(item);
        }
    }


    performFilter(filterBy: string): Hotels[] {
        filterBy = filterBy.toLocaleLowerCase();
      return this.hotels.filter((hotel: Hotels) => hotel.city.toLocaleLowerCase().includes(filterBy));
    }

}
