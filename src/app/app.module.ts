import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { CartComponent } from './cart/cart.component';
import { StarsComponent } from './shared/stars/stars.component';
import { HotelDataService } from './services/hotel-data.service';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    HotelsListComponent,
    CartComponent,
    StarsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,

    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HotelDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
