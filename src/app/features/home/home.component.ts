import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
// import { LegendItem, ChartType } from '../lbd/lbd-chart/lbd-chart.component';
// import * as Chartist from 'chartist';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(){

  }


}
