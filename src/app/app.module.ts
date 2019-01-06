import { RepositoryService, FlightService, LanguageService, MenuService, StaticDataService } from './_services';
import { HotelsResultComponent, HotelsComponent, HotelsPaymentComponent, HotleDetailsComponent, HotelsFilterComponent, HeaderComponent, HeaderMobileComponent, HeaderWebComponent, MenuLinksComponent, HomeComponent, FooterComponent, HomeExperienceComponent, HomePackagesComponent, FlightsComponent, FlightMultiCityComponent, FlightRoundTripComponent, FlightOneWayComponent, FlightResultComponent, FlightFilterComponent, FlightDetailsComponent, FlightPaymentComponent, FlightTypeSelectComponent, FlightTripSummaryComponent, LoadComponent, HistoryComponent, LoginComponent, PersonalComponent, RegisterComponent } from './_components';
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
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxPaginationModule } from 'ngx-pagination';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { CustomFormsModule } from 'ng2-validation';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
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
    FlightsComponent,
    FlightMultiCityComponent,
    FlightRoundTripComponent,
    FlightOneWayComponent,
    FlightResultComponent,
    FlightFilterComponent,
    FlightDetailsComponent,
    FlightPaymentComponent,
    FlightTypeSelectComponent,
    FlightTripSummaryComponent,
    LoadComponent,
    HistoryComponent,
    LoginComponent,
    PersonalComponent,
    RegisterComponent
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
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
    NgxPaginationModule,
    TypeaheadModule.forRoot(),
    AppRoutingModule,
    SelectDropDownModule,
    CustomFormsModule
  ],
  providers: [
    RepositoryService,
    FlightService,
    LanguageService,
    MenuService,
    StaticDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
