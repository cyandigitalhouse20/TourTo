import {  RepositoryService, FlightService, LanguageService, MenuService, StaticDataService } from './_services';
import { AppComponent } from './app.component';
import { SearchResultComponent, HotelsResultComponent, HotelsComponent, HotelsPaymentComponent, HotleDetailsComponent, HotelsFilterComponent,HeaderComponent,HeaderMobileComponent,HeaderWebComponent, MenuLinksComponent, HomePageComponent, HomeComponent, FooterComponent, HomeExperienceComponent, HomePackagesComponent, FlightsComponent, FlightResultComponent, FlightFilterComponent, FlightDetailsComponent, FlightPaymentComponent, FlightMultiCityComponent, FlightRoundTripComponent, FlightOneWayComponent } from './_components';
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
