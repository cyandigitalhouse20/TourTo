import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent, HomeComponent, FlightDetailsComponent } from './_components';
import { NnComponent } from './nn/nn.component';

 const routes:Routes=[
  {path:'tm',component:NnComponent},
  {path:'home',component:HomeComponent},
  {path:'flight',component:FlightDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 