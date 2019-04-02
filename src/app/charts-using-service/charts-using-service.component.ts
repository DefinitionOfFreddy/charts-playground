import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HighchartsService } from '../highcharts.service';
import { DataService } from '../data.service';
import { FirstChart } from './first-chart';


@Component({
  selector: "app-charts-using-service",
  template: `
        <div id={{id}}>
        </div>
    `
})
export class ChartsUsingServiceComponent implements AfterViewInit {
  id = "charts-using-service";
  constructor(
    private highchartsService: HighchartsService,
    private dataService: DataService
  ) {}

  ngAfterViewInit() {
    const datas = this.dataService.getJsonFirstServiceUse();
    const firstChart = new FirstChart(datas);
    this.highchartsService.drawChartFromOptions(this.id, firstChart.highchartsOption);
  }
}
