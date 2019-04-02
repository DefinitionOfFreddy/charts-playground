import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HighchartsService } from '../highcharts.service';
import { DataService } from '../data.service';
import { DraggableCharts } from './draggable-charts';


@Component({
  selector: "app-charts-draggable",
  template: `
        <div id={{id}}>
        </div>
    `
})
export class ChartsDraggableComponent implements AfterViewInit {
  id = "charts-using-plugin";
  constructor(
    private highchartsService: HighchartsService,
    private dataService: DataService
  ) {}

  ngAfterViewInit() {
    const datas = this.dataService.getJsonFirstServiceUse();
    const chart = new DraggableCharts(datas);
    this.highchartsService.drawChartFromOptions(this.id, chart.highchartsOption);
  }
}
