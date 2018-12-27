import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-packages',
  templateUrl: './home-packages.component.html',
  styleUrls: ['./home-packages.component.css']
})
export class HomePackagesComponent implements OnInit {
  rate: number = 3;
  isReadonly: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
