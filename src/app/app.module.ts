
import {  RepositoryService, FlightService, LanguageService, MenuService, StaticDataService } from './_services';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RatingModule } from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { SearchResultComponent } from './_components/search-result-compenents/search-result/search-result.component';
import { HotelsResultComponent } from './_components/hotels-components/hotels-result/hotels-result.component';
import { HotelsComponent } from './_components/hotels-components/hotels/hotels.component';
import { HotelsPaymentComponent } from './_components/hotels-components/hotels-payment/hotels-payment.component';
import { HotleDetailsComponent } from './_components/hotels-components/hotle-details/hotle-details.component';
import { HotelsFilterComponent } from './_components/hotels-components/hotels-filter/hotels-filter.component';
import { HeaderComponent } from './_components/header-compenents/header/header.component';
import { HeaderMobileComponent } from './_components/header-compenents/header-mobile/header-mobile.component';
import { HeaderWebComponent } from './_components/header-compenents/header-web/header-web.component';
import { MenuLinksComponent } from './_components/header-compenents/menu-links/menu-links.component';
import { HomeComponent } from './_components/home-components/home/home.component';
import { FooterComponent } from './_components/home-components/footer/footer.component';
import { HomeExperienceComponent } from './_components/home-components/home-experience/home-experience.component';
import { HomePackagesComponent } from './_components/home-components/home-packages/home-packages.component';
import { HomePageComponent } from './_components/home-components/home-page/home-page.component';
import { FlightsComponent } from './_components/flights-components/flights/flights.component';
import { FlightMultiCityComponent } from './_components/flights-components/flight-multi-city/flight-multi-city.component';
import { FlightRoundTripComponent } from './_components/flights-components/flight-round-trip/flight-round-trip.component';
import { FlightOneWayComponent } from './_components/flights-components/flight-one-way/flight-one-way.component';
import { FlightResultComponent } from './_components/flights-components/flight-result/flight-result.component';
import { FlightFilterComponent } from './_components/flights-components/flight-filter/flight-filter.component';
import { FlightDetailsComponent } from './_components/flights-components/flight-details/flight-details.component';
import { FlightPaymentComponent } from './_components/flights-components/flight-payment/flight-payment.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent,
    HotelsResultComponent,
    HotelsComponent,
    HotelsPaymentComponent,
    HotleDetailsComponent,
    HotelsFilterComponent,
    HeaderComponent,
    HeaderMobileComponent,
    HeaderWebComponent,
    MenuLinksComponent,
    HomeComponent,
    FooterComponent,
    HomeExperienceComponent,
    HomePackagesComponent,
    HomePageComponent,
    FlightsComponent,  
    FlightMultiCityComponent, 
    FlightRoundTripComponent,
    FlightOneWayComponent,
    FlightResultComponent,
    FlightFilterComponent, 
    FlightDetailsComponent,
    FlightPaymentComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RatingModule.forRoot(), FormsModule,
    Ng5SliderModule,
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
     NgxPaginationModule
  ],
  providers: [
    RepositoryService,
    FlightService,
    LanguageService,
    MenuService,
    StaticDataService
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
