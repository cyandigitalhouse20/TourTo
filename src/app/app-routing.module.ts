import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, FlightsComponent, FlightDetailsComponent, FlightPaymentComponent } from './_components';
import { LoadComponent } from './_components/load/load.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'flight/details', component: FlightDetailsComponent },
  { path: 'flight/payment', component: FlightPaymentComponent },
  { path: 'load', component: LoadComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
