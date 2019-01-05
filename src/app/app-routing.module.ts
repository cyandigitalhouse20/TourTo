import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, FlightsComponent, FlightDetailsComponent, FlightPaymentComponent } from './_components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'flight/details', component: FlightDetailsComponent },
  { path: 'flight/payment', component: FlightPaymentComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
