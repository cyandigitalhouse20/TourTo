import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, FlightsComponent, FlightDetailsComponent, FlightPaymentComponent } from './_components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'flights/:flightType/:class/:directFlight/:adult/:children/:flexDates/:originCityId/:destinationCityId/:departureDate/:returnDate', component: FlightsComponent },
  { path: 'flights/:flightType/:class/:directFlight/:adult/:children/:flexDates/:originCityId/:destinationCityId/:departureDate', component: FlightsComponent },
  { path: 'flights/:flightType/:class/:directFlight/:adult/:children/:flexDates/:origin1/:destination1/:departureDate1/:origin2/:destination2/:departureDate2/:origin3/:destination3/:departureDate3/:origin4/:destination4/:departureDate4/:origin5/:destination5/:departureDate5', component: FlightsComponent },
  { path: 'flight/details', component: FlightDetailsComponent },
  { path: 'flight/payment', component: FlightPaymentComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
