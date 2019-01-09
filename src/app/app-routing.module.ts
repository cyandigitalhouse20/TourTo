import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, FlightsComponent, FlightDetailsComponent, FlightPaymentComponent } from './_components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flights', component: FlightsComponent },
  //round trip
  { path: 'flights/:flightType/:class/:directFlight/:adult/:children/:flexDates/:originCityId/:destinationCityId/:departureDate/:returnDate', component: FlightsComponent },
  // one way
  { path: 'flights/:flightType/:class/:directFlight/:adult/:children/:flexDates/:originCityId/:destinationCityId/:departureDate', component: FlightsComponent },
  // multiCity
  { path: 'flights/:multiCityFlightsNumber/:flightType/:class/:directFlight/:adult/:children/:flexDates/:originId1/:destinationId1/:departureDate1/:originId2/:destinationId2/:departureDate2/:originId3/:destinationId3/:departureDate3/:originId4/:destinationId4/:departureDate4/:originId5/:destinationId5/:departureDate5', component: FlightsComponent },
  { path: 'flight/details', component: FlightDetailsComponent },
  { path: 'flight/payment', component: FlightPaymentComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
