import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DataService } from '../data.service';
import { SurchargeGraphOption } from './surcharge-graph-option';

import * as Highcharts from 'highcharts';
import HighchartsBoost from 'highcharts/modules/boost';
HighchartsBoost(Highcharts);


@Component({
  selector: "app-overload-graphs",
  template: `
        <div id={{id}}></div>
    `
})
export class OverloadGraphsComponent implements AfterViewInit {
  id = "charts-overload";



  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    const dataArray = this.dataService.getRandomData(new Date(1900, 0, 1), new Date(2018, 0, 31));
    const surchargeGraphOption = new SurchargeGraphOption(dataArray)
    Highcharts.chart(this.id, surchargeGraphOption.highchartsOption);
  }
}
